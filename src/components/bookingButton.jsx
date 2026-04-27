import React from "react";
import { Link } from "gatsby";

const BookingButton = ({ className }) => {
    return (
        <Link 
            className={`${className || ''} booking-button`}
            to="/calendar">
        Book Now
        </Link>
    )
}

export default BookingButton;