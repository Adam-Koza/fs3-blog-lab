import React from 'react';

// CSS
import './blogTile.css';

const BlogTile = props => {
    return (
        <div className="blog-container">
            {props.children}
        </div>
    )
};

export default BlogTile;
