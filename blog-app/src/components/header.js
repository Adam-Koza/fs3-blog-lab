import React from 'react';

// CSS
import './header.css'

const Header = props => {
	return (
		<header>
			<div>{props.title}</div>
			<div>Login/Signup</div>
		</header>

	)
};

export default Header;
