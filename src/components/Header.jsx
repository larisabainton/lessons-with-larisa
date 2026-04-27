import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import BookingButton from "./bookingButton";

const pageLinks = (className) => {
    return (
        <div className={`${className} header_link-wrapper`}>
            <Link to="/signup" className="header_link">Sign Up</Link>
            <Link to="/login" className="header_link">Student Portal</Link>
            <BookingButton />
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/"><StaticImage className="header-title"src="../images/title.png" alt="Lessons with Larisa"/></Link>
            </div>

            {/* mobile */}
            <div className="header_menu">
                <StaticImage alt="" placeholder="none" className="menu_image" src="../images/menu.svg" />
                {pageLinks("header_menu-links")}
            </div>

            {/* desktop */}
            {pageLinks("header_desktop-links")}

        </div>
    )
};

export default Header