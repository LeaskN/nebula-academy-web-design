import React from 'react';
import './BlogPreview.css';
import ReactMarkdown from 'react-markdown';

const BlogPreview = (props) => {

    // I need to cut the string at a certain length then add ...
    const cutString = () => {
        return props.blog?.substring(0, 550);
    } 

    const grabImage = (blog) => {
        const imageRegex = /<!-- FeaturedImage: .* -->/;
        const featuredImage = blog.match(imageRegex)?.[0];
        if(featuredImage) {
            const beginning = /<!-- FeaturedImage: /;
            const end = / -->/;
            const justImgSrc = featuredImage.replace(beginning, "").replace(end, "");
            return justImgSrc !== "(add link)" ? justImgSrc : null;
        }
        return null;
    }

    const createImage = () => {
        const ourSrc = grabImage(cutString());
        const noImg = "https://bit.ly/3s0TWIY";
        // console.log(ourSrc, "<-- here")
        const imgStyle = {
            backgroundImage: `url(${ourSrc ? ourSrc : noImg})`
        }
        console.log(ourSrc, "Our")
        return <div className="preview-image" style={imgStyle}></div>;
    }

    return (
        <div className="blog-preview">
            {createImage()}
            
            <div className="blog-text">
                <ReactMarkdown skipHtml={true} source={cutString()+"..."} />
            </div>
        </div>
    )
}

export default BlogPreview;