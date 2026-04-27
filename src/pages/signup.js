import * as React from "react";
import { Link } from "gatsby";

import Header from "../components/Header"
import BookingButton from "../components/bookingButton"
import MmsWidget from "../components/MmsWidget";

const SignUpPage = () => {
    return (
        <div className="sign-up">
            <BookingButton className="body_booking-button" />
            <header>
                <Header />
            </header>
            <main>
                <div className="text">This form is for new students. To book a lesson and sign up, <Link to="/calendar">click here</Link>.</div>
                <MmsWidget 
                    scriptUrl = "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9sWHBKeiIsIldlYnNpdGVJRCI6Indic19WbjVKWCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnN3IzSjQifQ=="
                />
            </main>
        </div>
    )
}

export default SignUpPage;