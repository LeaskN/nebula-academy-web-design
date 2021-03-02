import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './BlogPage.css';

const BlogPage = ({ routeProps }) => {
    const { blogData } = routeProps.location.state;

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className="blog-container">
            <Link to={"/blogs"}><button>All Blogs</button></Link>
            <div className="blog-inner-container">
                <ReactMarkdown skipHtml={true}>
                    { blogData }
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default BlogPage;