import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import BookingButton from "./bookingButton";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/"><StaticImage className="header-title"src="../images/title.png" alt="Lessons with Larisa"/></Link>
            </div>
            <div className="header_link-wrapper">
                <Link to="/signup" className="header_link">Sign Up</Link>
                <Link to="/login" className="header_link">Student Portal</Link>
                <BookingButton />
            </div>
        </div>
    )
};

export default Header