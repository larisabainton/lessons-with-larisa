import * as React from "react";
import { Script, Link } from "gatsby";

import Header from "../components/Header"
import BookingButton from "../components/bookingButton"

const CalendarPage = () => {
    return (
        <div className="sign-up">
            <BookingButton className="body_booking-button" />
            <header>
                <Header />
            </header>
            <main>
                <div className="text">This calendar is for new students. For existing students, please login to the portal <Link to="/login">here</Link> to book a lesson.</div>
                <Script 
                    src = "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9sWHBKeiIsIldlYnNpdGVJRCI6Indic19WbjVKWCIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pnN3I1SlIifQ=="
                />
            </main>
        </div>
    )
}

export default CalendarPage;