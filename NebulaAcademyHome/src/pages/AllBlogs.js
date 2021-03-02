import React from 'react';
import { BlogJumbotron } from '../components/Blog/BlogJumbotron';
import { BlogFooter } from '../components/Blog/BlogFooter';
import AllBlogsPage from '../components/Blog/AllBlogsPage';

export const AllBlogs = () => (
    <>
        <BlogJumbotron />
            <AllBlogsPage/>
        <BlogFooter />
    </>
)