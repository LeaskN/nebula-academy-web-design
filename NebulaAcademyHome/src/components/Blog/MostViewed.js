import React from 'react';
import './Featured.css';
import { Link } from 'react-router-dom';
import { AiTwotoneFire } from 'react-icons/all';
import { IconContext } from 'react-icons';

const MostViewed = ({ blog }) => {
    return (
        <div className="featured-blog">
            <IconContext.Provider value={{size: "2.5em", className: "icon-placement"}}>
                <AiTwotoneFire />
            </IconContext.Provider>
            <Link to={{
                pathname: `/blogs/${blog?.date ? blog.date : ""}`,
                state: {
                    blogData: blog?.text
                }
            }}>
                <div className="feat-blog-cover">
                    <span>Read More...</span>
                </div>
            </Link>
            <div className="img-header-wrap">
                <div className="featured-blog-image"></div>
                <h3 className="featured-headline">How To Find Salvation As A Software Engineer</h3>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
    )
}

export default MostViewed;