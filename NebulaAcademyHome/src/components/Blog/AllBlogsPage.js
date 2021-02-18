import React, { useEffect, useState } from 'react';
import './AllBlogsPage.css';
import BlogPreview from './BlogPreview';
import Featured from './Featured';

const AllBlogsPage = () => {
    const [mdFiles, updateFiles] = useState({ posts: null, updated: false });

    useEffect(() => {
        // fetch("http://localhost:3000/test")
        //     .then(res => res.json())
        //     // .then(files => {
        //     //     console.log(files)
        //     //     return files[1].text()
        //     // })
        //     .then(files => updateFiles((mdFiles) => ({...mdFiles, posts: files})))
        //     .catch(err => console.error(err));
    }, [mdFiles.updated]);


    const filterOutBlogsWithoutDate = (blogs) => {
        return blogs.filter(blog => {
            const dateCommentRegex = /<!-- Date: \d{2}-\d{2}-\d{4} -->/;
            blog.match(dateCommentRegex);
            return blog.match ? true : false;
        })
    }

    const orderBlogsByDateDesc = (blogs) => {
        if(blogs.length === 0) return blogs;
        const returnDateVal = (blog) => {
            const dateRegex = /\d{2}-\d{2}-\d{4}/;
            const [ getDate ] = blog.match(dateRegex);
            return new Date(getDate).valueOf();
        }
        const compareDates = (a, b) => {
            const aVal = returnDateVal(a);
            const bVal = returnDateVal(b);
            if(aVal > bVal){
                return -1
            } else if(bVal < aVal){
                return 1;
            }
            return 0;
        }
        blogs.sort(compareDates);
        return blogs;
    }

    const handleClick = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/test")
            .then(res => res.json())
            // .then(files => {
            //     console.log(files)
            //     return files[1].text()
            // })
            .then(files => orderBlogsByDateDesc(filterOutBlogsWithoutDate(files)))
            .then(files => updateFiles((mdFiles) => ({...mdFiles, posts: files})))
            .catch(err => console.error(err));
    }

    const renderBlogs = () => {
        return mdFiles?.posts?.map((file, key) => <BlogPreview key={key} blog={file} />)
    }

    return (
        <div className="all-blogs-page">
            <button onClick={handleClick}>CLICK ME</button>
            <section className="featured-section">
                <Featured />
                <Featured />
            </section>
            {renderBlogs()}
        </div>
    )
}

export default AllBlogsPage;