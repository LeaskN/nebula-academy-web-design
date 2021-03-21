import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/all';
import Markdown from 'markdown-to-jsx';
import BlogLoadingWheel from './BlogLoadingWheel';
import './BlogPage.css';

/* 
    TO DO:
        It seems like I might need to be logged into Salesforce to actually see the hosted
        img links??

        - Add blog wheel to single blogs
        - Check mobile -> blog not fetching from mobile -> it doesn't look like it can hit my server
        - It might be better if the .md parser recognized the styling that headers # gave (the underline)
            instead of having to rely on adding in <hr /> elements. This would allow someone like Anam
            to only have to rely on her markdown viewer.
        - Testing Environment: We could pull out the test component for Anam or whoever, to fiddle around with the styling
            in a create-react-app before uploading.
        - Flashing when loading a blog?
        - Parse date (top right of preview) for something more user friendly.
        - Cache - but make the request after a defined time and compare with cache to update
        - Need cleanup function
*/
const fetchBlogData = (blogId, func) => {
    if(blogId){
        fetch(`http://localhost:3000/test2/?${blogId}`)
            .then(res => res.json())
            .then(res => {
                if(res?.errorCode) throw new Error("Server Error: " + res?.errorCode);
                func({ blogData: res, loading: false });
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const BlogPage = ({ routeProps }) => {
    const [ data, updateBlogData ] = useState({ blogData: "", loading: true });
    
    useEffect(() => {
        window.scrollTo(0,0);
        if(routeProps?.location?.state){
            const { blogData } = routeProps?.location?.state;
            updateBlogData({ blogData: blogData, loading: false });
        } else {
            let idParse = window.location.pathname?.match(/\/\w{6,}\//);
            if(idParse?.[0]){
                idParse = idParse[0]?.match(/\w*/g);
                idParse = idParse.reduce((acc, cur) => {
                    if(cur) acc = cur;
                    return acc;
                }, null);
            }
            fetchBlogData(idParse, updateBlogData);
        }
    }, [routeProps]);

    return (
        <div className="blog-container">
            <Link to={"/blogs"}><button id="back-btn"><AiOutlineLeft />All Blogs</button></Link>
            <BlogLoadingWheel loading={data.loading} />
            <div className="blog-inner-container">
                <Markdown>
                    { data.blogData }
                </Markdown>
            </div>
            <Link to={"/blogs"}>
                <button style={data.loading ? {opacity: "0"} : null} id="btm-back-btn">
                    <AiOutlineLeft /> All Blogs
                </button>
            </Link>
        </div>
    )
}

export default BlogPage;