import React, { useEffect, useState, useCallback } from 'react';
import { usePersistedState } from './BlogCustomHooks';
import './AllBlogsPage.css';
import BlogPreview from './BlogPreview';
import MostViewed from './MostViewed';
import Featured from './Featured';
import BlogLoadingWheel from './BlogLoadingWheel';

const blogToObject = (blogs) => {
    if(blogs.length === 0) return blogs;
    // We should get the date first and then re-arrange
    const getDate = (blog) => {
        const dateRegex = /\d{2}-\d{2}-\d{4}/;
        try {
            const [ date ] = blog.match(dateRegex);
            return date;
        } catch(e){
            return null
        }
    }
    const blogObject = blogs.reduce((acc, cur) => {
        acc.push({text: cur.rawText, date: getDate(cur.rawText), id: cur.id});
        return acc;
    }, []);
    return blogObject;
}

const orderBlogsByDateDesc = (blogs) => {
    if(blogs.length === 0) return blogs;

    const blogObjects = blogToObject(blogs);
    // console.log(blogObjects, "Objects")
    const returnDateVal = (blog) => {
        return new Date(blog.date).valueOf();
    }

    const compareDates = (a, b) => {
        const aVal = returnDateVal(a);
        const bVal = returnDateVal(b);
        if(aVal > bVal){
            return -1;
        } else if(bVal < aVal){
            return 1;
        }
        return 0;
    }
    blogObjects.sort(compareDates);
    return blogObjects;
}

// const spliceOutFeatured = (files, idx) => {
//     if(idx !== null){
//         files.splice(idx, 1);
//     }
// }

const markAndReturnFeatured = (blogs) => {
    // Marking and then returning first featured blog found.
    const featuredCheck = /<!--\s*Featured\s*Blog\s*-->/;
    const firstFeatured = blogs.find((blog, idx, arr) => {
        const holdMatch = blog?.text?.match(featuredCheck);
        if(holdMatch){
            blog.featured = true;
            blog.idx = idx;
            arr.featuredIdx = idx;
        }
        return holdMatch ? true : false;
    })
    return firstFeatured;
}

const filterOutBlogsWithoutDate = (blogs) => {
    const dateCommentRegex = /<!--\s*Date:\s*\d{2}-\d{2}-\d{4}\s*-->/;
    return blogs.filter(blog => {
        const holdMatch = blog?.rawText?.match(dateCommentRegex);
        return holdMatch ? true : false;
    })
}

const checkIfLocalBlogsNeedUpdate = (localBlogs, apiBlogs) => {
    if(localBlogs?.length < 1) return true;
    return localBlogs.some((blog, idx) => {
        for(let element in blog){
            const blogDidChange = blog[element] === apiBlogs?.[idx]?.[element] ? false : true;
            if(blogDidChange) return true;
        }
        return false;
    })
}

const AllBlogsPage = () => {
    const [state, updateState] = useState({ loading: true });
    // ~ 180 blogs stored in localStorage === ~ 1mb
    // localStorage has a total capacity of 5mb
    const [localBlogs, updateLocalBlogs] = usePersistedState("posts", []);
    
    const updateLocalBlogsFunc = useCallback(newBlogs => {
            updateLocalBlogs(newBlogs);
        }, [updateLocalBlogs])

    useEffect(() => {
        if(localBlogs.length > 1) updateState((prevState) => ({ ...prevState, loading: false }));
        fetch("http://localhost:3000/test")
            .then(res => res.json())
            .then(files => {
                if(files?.errorCode) throw new Error("Server Error: " + files?.errorCode);
                const filteredFiles = orderBlogsByDateDesc(filterOutBlogsWithoutDate(files));
                filteredFiles.push(markAndReturnFeatured(filteredFiles));
                if(checkIfLocalBlogsNeedUpdate(localBlogs, filteredFiles)) {
                    console.log("update needed...");
                    updateLocalBlogsFunc(filteredFiles);
                } else console.log("no update needed...");
                updateState(prevState => ({...prevState, loading: false}));
                return filteredFiles
            })
            .catch(err => console.error(err));
    }, [localBlogs, updateLocalBlogsFunc]);

    const renderBlogs = () => {
        return localBlogs?.map((data, key) => {
            if(!data.featured) return <BlogPreview key={key} blog={data} />; 
        });
    }

    const renderFeaturedSection = () => (
        <section className="featured-section">
            <MostViewed />
            <Featured blog={localBlogs?.[localBlogs?.length-1]} />
        </section>
    )

    return (
        <div className="all-blogs-page">
            <BlogLoadingWheel loading={state.loading} />
            {renderFeaturedSection()}
            {renderBlogs()}
        </div>
    )
}

export default AllBlogsPage;