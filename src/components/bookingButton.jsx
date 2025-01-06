import React from "react";

const BookingButton = ({ className }) => {
    return (
        <a 
            className={`${className || ''} booking-button`}
            target="_top" 
            href="https://app.squareup.com/appointments/book/09cs812tn2qlet/LZ206ZVAYTJCT/start" 
            rel="nofollow">
        Book Now   
        </a>
    )
}

export default BookingButton;