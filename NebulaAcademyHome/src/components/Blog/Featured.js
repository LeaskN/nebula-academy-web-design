import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotonePushpin } from 'react-icons/all';
import { IconContext } from 'react-icons';
import { cutString, createImage } from './SharedBlogFunctions';
import Markdown from 'markdown-to-jsx';
import './Featured.css';

const Featured = ({ blog }) => {
    console.log(blog, "<====== here")
    const parseTitlePreview = (blog) => {
        const previewStartReg = /<!--\s*Preview\s*-->/;
        const previewEndReg = /<!--\s*End\s*Preview\s*-->/;
        const previewStart = blog?.match(previewStartReg);
        const previewEnd = blog?.match(previewEndReg);
        const preview = blog?.slice(previewStart?.index + previewStart?.[0].length + 1, previewEnd?.index);
        const title = blog?.slice(0, previewStart?.index);
        return previewStart?.index ? title + preview : `${blog ? blog?.slice(0, 500) : "Loading"}...`;
    }
    
    const blogText = parseTitlePreview(cutString(blog));
    return (
        <div className="featured-blog">
            <IconContext.Provider value={{size: "2.5em", className: "icon-placement"}}>
                <AiTwotonePushpin />
            </IconContext.Provider>
            <Link to={{
                pathname: `/blog/${blog?.id}/${blog?.date}`,
                state: {
                    blogData: blog?.text
                }
            }}>
                <div className="feat-blog-cover">
                    <span>Read More...</span>
                </div>
            </Link>
            <div className="img-header-wrap">
                { createImage(blog, "featured-blog-image", 1000) }
            </div>
            <div className="markdown-wrap">
                <Markdown>
                    { blogText ? blogText : "" }
                </Markdown>
            </div>
        </div>
    )
}

export default Featured;