import React from 'react';
import BlogTile from "./blogTile";

// CSS
import "./blogPreview.css"

const BlogPreview = props => {
	return (
		<BlogTile>
			<div>
				<div className="tweet-container">
					<h4 className="name">{props.title}</h4>
					<h4 className="handle">{props.author} - {props.date}</h4>
				</div>
				<div className="tweet-body">
					{props.body}
				</div>
			</div>
		</BlogTile>
	)
};

export default BlogPreview;
