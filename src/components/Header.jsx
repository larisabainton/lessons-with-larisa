import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">Lessons with Larisa</div>
            <div className="header_link-wrapper">
                <Link to="/#home" className="header_link">Home</Link>
                <Link to="/#about" className="header_link">About Me</Link>
                <Link to="/#contact" className="header_link">Contact</Link>
            </div>
        </div>
    )
};

export default Header