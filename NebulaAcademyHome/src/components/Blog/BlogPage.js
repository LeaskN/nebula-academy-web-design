import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import source from './TestMd.md';
import './BlogPage.css';

const BlogPage = (data) => {
    const [mdFiles, updateFiles] = useState({ testPost: null, posts: null, updated: false});

    useEffect(() => {
        console.log(source, "source?")
        // fetch(source)
        //     .then(res => {
        //         console.log(res)
        //         return res.text()
        //     })
        //     .then(post => {
        //         updateFiles((mdFiles) => ({...mdFiles, testPost: post, updated: true}))
        //     })
        //     .catch(err => console.error(err))   
    }, [mdFiles.updated])

    const filterOutBlogsWithoutDate = (blogs) => {
        return blogs.filter(blog => {
            const dateCommentRegex = /<!-- Date: \d{2}-\d{2}-\d{4} -->/;
            blog.match(dateCommentRegex);
            return blog.match ? true : false;
        })
    }

    const grabImage = (blog) => {
        const imageRegex = /<!-- FeaturedImage: .* -->/;
        const featuredImage = blog.match(imageRegex)?.[0];
        if(featuredImage) {
            const beginning = /<!-- FeaturedImage: /;
            const end = / -->/;
            const justImgSrc = featuredImage.replace(beginning, "").replace(end, "");
            return justImgSrc;
        }
        return null;
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

    const renderPosts = () => {
        return mdFiles?.posts?.map((file, key) => <ReactMarkdown skipHtml={true} key={key} source={file} />)
    }

    return (
        <div className="blog-container">
            <button onClick={handleClick}>CLICK ME</button>
            <div className="blog-inner-container">
                {renderPosts()}
                <ReactMarkdown skipHtml={true}>
                    {mdFiles.testPost}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default BlogPage;