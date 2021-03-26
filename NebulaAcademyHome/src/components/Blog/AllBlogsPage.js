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

const findFeaturedAndPopular = (blogs, idx) => {
    // Marking and then returning first featured blog found.
    const markFeatured = (blog) => {
        const featuredCheck = /<!--\s*Featured\s*Blog\s*-->/;
        const holdMatch = blog?.text?.match(featuredCheck);
        if(holdMatch){
            blog.featured = true;
            blog.idx = idx;
            return blog;
        }
        return false;
    }

    const markMostPopular = (blog, idx) => {
        // Marking and then returning first featured blog found.
        const popular = /<!--\s*On\s*Fire\s*-->/;
        const holdMatch = blog?.text?.match(popular);
        if(holdMatch){
            blog.popular = true;
            blog.idx = idx;
            return blog;
        }
        return false;
    }

    const featuredAndPopular = blogs.reduce((acc, blog, idx) => { 
        const popular = !acc["popular"] ? markMostPopular(blog, idx) : false;
        const featured = !acc["featured"] ? markFeatured(blog, idx) : false;
        if(popular) acc["popular"] = popular;
        if(featured) acc["featured"] = featured;
        return acc;
    }, {});

    return featuredAndPopular;
}

const filterOutBlogsWithoutDate = (blogs) => {
    const dateCommentRegex = /<!--\s*Date:\s*\d{2}-\d{2}-\d{4}\s*-->/;
    return blogs.filter(blog => {
        const holdMatch = blog?.rawText?.match(dateCommentRegex);
        return holdMatch ? true : false;
    })
}

const doCachedBlogsNeedUpdate = (cachedBlogs, apiBlogs) => {
    if(!cachedBlogs || cachedBlogs?.length < 1) return true;
    return cachedBlogs?.some((blog, idx) => {
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
    const [cachedBlogs, updateCachedBlogs] = usePersistedState("posts", []);
    
    const updateCache = useCallback(newBlogs => {
            updateCachedBlogs(newBlogs);
        }, [updateCachedBlogs])

    useEffect(() => {
        let ignore = false;

        if(cachedBlogs?.allBlogs?.length > 1) updateState((prevState) => ({ ...prevState, loading: false }));

        fetch("http://localhost:3000/test")
            .then(res => res.json())
            .then(files => {
                if(ignore) return;
                if(files?.errorCode) throw new Error("Server Error: " + files?.errorCode);

                const filteredFiles = orderBlogsByDateDesc(filterOutBlogsWithoutDate(files));
                
                const blogs = {
                    allBlogs: filteredFiles,
                    featured: findFeaturedAndPopular(filteredFiles)
                }

                if(doCachedBlogsNeedUpdate(cachedBlogs.allBlogs, blogs.allBlogs)) updateCache(blogs);
                else console.log("no update needed...");

                updateState(prevState => ({...prevState, loading: false}));
            })
            .catch(err => console.error(err));

            return () => { ignore = true; }
    }, [cachedBlogs, updateCache]);

    const renderBlogs = () => {
        return cachedBlogs?.allBlogs?.map((data, key) => {
            if(!data?.featured && !data?.popular) return <BlogPreview key={key} blog={data} />; 
        });
    }

    const renderFeaturedSection = () => {
        return cachedBlogs?.featured?.featured ? (
            <section className="featured-section">
                {cachedBlogs?.featured?.popular ? <MostViewed blog={cachedBlogs?.featured?.popular}/>: ""}
                {cachedBlogs?.featured?.featured ? <Featured blog={cachedBlogs?.featured?.featured}/> : ""}            
            </section>  
        ) : null
    }

    return (
        <div className="all-blogs-page">
            <BlogLoadingWheel loading={state.loading} />
            {renderFeaturedSection()}
            {renderBlogs()}
        </div>
    )
}

export default AllBlogsPage;