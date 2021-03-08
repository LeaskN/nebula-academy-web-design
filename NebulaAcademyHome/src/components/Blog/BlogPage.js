import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import './BlogPage.css';

/* 
    TO DO:
        I NEED A WAY TO CALL FOR A PARTICULAR BLOG FROM SALESFORCE JUST IN CASE SOMEONE
        TRIES TO USE A DIRECT LINK GENERATED BY REACT ROUTER TO VIEW A BLOG.
*/
const BlogPage = ({ routeProps }) => {
    const { blogData } = routeProps.location.state;

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="blog-container">
            <Link to={"/blogs"}><button>All Blogs</button></Link>
            <div className="blog-inner-container">
                <ReactMarkdown allowDangerousHtml={true}>
                    { blogData }
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default BlogPage;