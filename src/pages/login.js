import * as React from "react";
import { Link, Script } from "gatsby";

import Header from "../components/Header"
import BookingButton from "../components/bookingButton"

const LogInPage = () => {
    return (
        <div className="log-in">
            <BookingButton className="body_booking-button" />
            <header>
                <Header />
            </header>
            <main>
                <div className="text">This login is for existing students. To book a first lesson and sign up, <Link to="/calendar">click here</Link>. To just sign up, <Link to="/signup">click here</Link>.</div>
                <Script 
                    src = "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9sWHBKeiIsIldlYnNpdGVJRCI6Indic19WbjVKWCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnODU1SkYifQ=="
                />
            </main>
        </div>
    )
}

export default LogInPage;