import React from 'react';
import './Featured.css';
import { AiTwotonePushpin } from 'react-icons/all';
import { IconContext } from 'react-icons';

const Featured = () => {
    return (
        <div className="featured-blog">
            <IconContext.Provider value={{size: "2.5em", className: "icon-placement"}}>
                <AiTwotonePushpin />
            </IconContext.Provider>
            <div className="featured-blog-image"></div>
            <h3 className="featured-headline">How To Find Salvation As A Software Engineer</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            
        </div>
    )
}

export default Featured;