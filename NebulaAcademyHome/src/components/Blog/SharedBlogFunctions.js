import React from 'react';

export const cutString = (blog, length = null) => {
    const getTitle = (() => {
        const titleRegex = /<!--\s*Title\s*-->(.|\n)*<!--\s*End\s*Title\s*-->/;
        const title = blog?.text?.match(titleRegex)?.[0];
        return title;
    })();

    const getPreview = (() => {
        const previewRegex = /<!--\s*Preview\s*-->(.|\n)*<!--\s*End\s*Preview\s*-->/;
        const preview = blog?.text?.match(previewRegex)?.[0];
        return preview;
    })();

    if(getTitle && getPreview && length === null ) return `${getTitle} <hr /> ${getPreview}`;
    
    return blog?.text?.substring(0, length === null ? 1000 : length);
} 

export const grabImageFromTxt = (text) => {
    const imageRegex = /<!--\s*FeaturedImage:\s*.*-->/;
    const featuredImage = text?.match(imageRegex)?.[0];
    if(featuredImage) {
        const beginning = /<!--\s*FeaturedImage:\s*/;
        const end = /\s*-->/;
        const justImgSrc = featuredImage?.replace(beginning, "")?.replace(end, "");
        return justImgSrc !== "(add link)" ? justImgSrc : null;
    }
    return null;
}

export const createImage = (blog, className, length = null) => {
    const ourSrc = grabImageFromTxt(blog?.text);
    const noImg = "https://bit.ly/3s0TWIY";
    // console.log(ourSrc, "<-- here")
    const imgStyle = {
        backgroundImage: `url(${ourSrc ? ourSrc : noImg})`
    }
    // console.log(ourSrc, "Our")
    return <div className={className} style={imgStyle}></div>;
}

export const markMostPopular = (blog) => {
    // Marking and then returning first featured blog found.
    const onfire = /<!--\s*On\s*Fire\s*-->/;
    const holdMatch = blog?.text?.match(onfire);
    if(holdMatch){
        blog.onfire = true;
        return true;
    }
    return false;
}