import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import BookingButton from "./bookingButton";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <StaticImage className="header-title"src="../images/title.png" alt="Lessons with Larisa"/>
            </div>
            <div className="header_link-wrapper">
                <Link to="/#home" className="header_link">Home</Link>
                <Link to="/#about" className="header_link">About Me</Link>
                <Link to="/#contact" className="header_link">Contact</Link>
                <BookingButton />
            </div>
        </div>
    )
};

export default Header