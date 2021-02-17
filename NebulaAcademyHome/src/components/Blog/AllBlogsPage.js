import React, { useEffect, useState } from 'react';
import './AllBlogsPage.css';
import BlogPreview from './BlogPreview';
import Featured from './Featured';

const AllBlogsPage = () => {
    
    return (
        <div className="all-blogs-page">
            <section className="featured-section">
                <Featured />
                <Featured />
            </section>
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
            <BlogPreview />
        </div>
    )
}

export default AllBlogsPage;