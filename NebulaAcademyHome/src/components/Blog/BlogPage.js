import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './BlogPage.css';

const BlogPage = (data) => {
    const [mdFiles, updateFiles] = useState({ posts: "", updated: false});

    useEffect(() => {
        // fetch(source)
        //     .then(res => {
        //         console.log(res)
        //         return res.text()
        //     })
        //     .then(post => {
        //         console.log(post)
        //         updateFiles((mdFiles) => ({...mdFiles, posts: post, updated: true}))
        //     })
        //     .catch(err => console.error(err))   
    }, [mdFiles.updated])

    const handleClick = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/test")
            .then(res => res.json())
            // .then(files => {
            //     console.log(files)
            //     return files[1].text()
            // })
            .then(file => updateFiles((mdFiles) => ({...mdFiles, posts: file[1]})))
            .catch(err => console.error(err));
    }

    return (
        <div className="blog-container">
            <button onClick={handleClick}>CLICK ME</button>
            <div className="blog-inner-container">
                <ReactMarkdown source={mdFiles.posts} />
                {/* <Markdown options={{wrapper: 'article'}} children={mdFiles.posts}/> */}
            </div>
        </div>
    )
}

export default BlogPage