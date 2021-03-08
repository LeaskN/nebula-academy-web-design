import React from 'react';
import { AiTwotonePushpin } from 'react-icons/all';
import { IconContext } from 'react-icons';
import { cutString, createImage } from './SharedBlogFunctions';
import ReactMarkdown from 'react-markdown';

import './Featured.css';

const Featured = ({ data }) => {
    const parseTitlePreview = (data) => {
        const previewStartReg = /<!--\s*Preview\s*-->/;
        const previewEndReg = /<!--\s*End\s*Preview\s*-->/;
        const previewStart = data?.match(previewStartReg);
        const previewEnd = data?.match(previewEndReg);
        const preview = data?.slice(previewStart?.index + previewStart?.[0].length + 1, previewEnd?.index);
        const title = data?.slice(0, previewStart?.index);
        return previewStart?.index ? title + preview : `${data ? data?.slice(0, 500) : "Loading"}...`;
    }
    
    const blogText = parseTitlePreview(cutString(data));
    return (
        <div className="featured-blog">
            <IconContext.Provider value={{size: "2.5em", className: "icon-placement"}}>
                <AiTwotonePushpin />
            </IconContext.Provider>
            <div className="img-header-wrap">
                {createImage(data, "featured-blog-image", 1000)}
                {/* <div className="featured-blog-image"></div> */}
            </div>
            <div className="markdown-wrap">
                <ReactMarkdown skipHtml={true} source={blogText} />
            </div>
        </div>
    )
}

export default Featured;