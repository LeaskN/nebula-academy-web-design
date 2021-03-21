import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './BlogPage.css';
import brand from './what-is-a-brand.md';

// const fetchBlogData = (blogId, func) => {
//     if(blogId){
//         fetch(`http://localhost:3000/test2/?${blogId}`)
//             .then(res => res.json())
//             .then(res => {
//                 if(res?.errorCode) throw new Error("Server Error: " + res?.errorCode);
//                 func(res);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }
const localMd = (func) => {
    fetch(brand)
        .then(res => {
            return res.text();
        })
        .then(res => {
            func(res);
        })
}

const TestBlogPage = ({ routeProps }) => {
    const [ data, updateBlogData ] = useState("What");

    useEffect(() => {
        // window.scrollTo(0,0);
        // if(routeProps?.location?.state){
        //     const { blogData } = routeProps?.location?.state;
        //     updateBlogData(blogData);
        // } else {
        //     let idParse = window.location.pathname?.match(/\/\w{6,}\//);
        //     if(idParse?.[0]){
        //         idParse = idParse[0]?.match(/\w*/g);
        //         idParse = idParse.reduce((acc, cur) => {
        //             if(cur) acc = cur;
        //             return acc;
        //         }, null);
        //     }
        //     fetchBlogData(idParse, updateBlogData);
        // }
        localMd(updateBlogData);
    }, [routeProps]);
    
    return (
        <div className="blog-container">
            <Link to={"/blogs"}><button>All Blogs</button></Link>
            <div className="blog-inner-container">
                <Markdown>
                    {data}
                </Markdown>
            </div>
        </div>
    )
}

export default TestBlogPage;