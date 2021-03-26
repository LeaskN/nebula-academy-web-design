import React from 'react';
import './BlogLoadingWheel.css';

const BlogLoadingWheel = (props) => (
    <div className={`${props.loading ? "lds-roller" : "hide-loader"}`}>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>
)

export default BlogLoadingWheel;