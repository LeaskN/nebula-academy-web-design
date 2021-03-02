import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreview.css';
import ReactMarkdown from 'react-markdown';

const BlogPreview = ({ blog }) => {
    // console.log(props, "<-props")
    // I need to cut the string at a certain length then add ...
    const cutString = () => {
        return blog?.text?.substring(0, 550);
    } 

    const grabImageFromTxt = (text) => {
        const imageRegex = /<!--\s*FeaturedImage:\s*.* -->/;
        const featuredImage = text?.match(imageRegex)?.[0];
        if(featuredImage) {
            const beginning = /<!--\s*FeaturedImage:\s*/;
            const end = /\s*-->/;
            const justImgSrc = featuredImage.replace(beginning, "").replace(end, "");
            return justImgSrc !== "(add link)" ? justImgSrc : null;
        }
        return null;
    }

    const createImage = () => {
        const ourSrc = grabImageFromTxt(cutString());
        const noImg = "https://bit.ly/3s0TWIY";
        // console.log(ourSrc, "<-- here")
        const imgStyle = {
            backgroundImage: `url(${ourSrc ? ourSrc : noImg})`
        }
        // console.log(ourSrc, "Our")
        return <div className="preview-image" style={imgStyle}></div>;
    }

    const formatDate = () => {
        
    }

    return (
        <div className="blog-preview">
            <div className="blog-preview-img-holder">
                {createImage()}
            </div>
            <p className="date-created">{blog.date}</p>
            <div className="blog-text">
                <ReactMarkdown skipHtml={true} source={cutString()+"..."} />
            </div>
            <Link to={{
                pathname: `/blogs/${blog.date}`,
                state: {
                    blogData: blog.text
                }
            }}>
                <div className="read-me">Read More</div>
            </Link>
        </div>
    )
}

export default BlogPreview;