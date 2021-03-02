import React, { useEffect, useState } from 'react';
import './AllBlogsPage.css';
import BlogPreview from './BlogPreview';
import Featured from './Featured';

const AllBlogsPage = () => {
    const [mdFiles, updateFiles] = useState({ posts: null, updated: false });
    // I need to sent up a fake feed that determines which blog is the most popular
    useEffect(() => {
        fetch("http://localhost:3000/test")
            .then(res => res.json())
            .then(files => {
                const filteredFiles = orderBlogsByDateDesc(filterOutBlogsWithoutDate(files));
                return filteredFiles
            })
            .then(filteredFiles => updateFiles((mdFiles) => ({...mdFiles, posts: filteredFiles})))
            .catch(err => console.error(err));
    }, [mdFiles.updated]);

    const filterOutBlogsWithoutDate = (blogs) => {
        return blogs.filter(blog => {
            const dateCommentRegex = /<!-- Date: \d{2}-\d{2}-\d{4} -->/;
            blog.match(dateCommentRegex);
            return blog.match ? true : false;
        })
    }

    const blogToObject = (blogs) => {
        if(blogs.length === 0) return blogs;
        console.log(blogs, "<-- blogs");
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
            acc.push({text: cur, date: getDate(cur)});
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

    const renderBlogs = () => {
        return mdFiles?.posts?.map((data, key) => <BlogPreview key={key} blog={data} />);
    }

    return (
        <div className="all-blogs-page">
            <section className="featured-section">
                <Featured />
                <Featured />
            </section>
            {renderBlogs()}
        </div>
    )
}

export default AllBlogsPage;