import React from 'react';

// CSS
import './footer.css';

const Footer = props => {
    return (
        <footer>
            <div>{props.bottom}</div>
        </footer>
    )
};

export default Footer;
