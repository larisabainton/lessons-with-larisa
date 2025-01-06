import * as React from "react"
import '../style/main.scss';

import About from "../components/About"
import BookingButton from "../components/bookingButton"
import Cover from "../components/Cover"
import Header from "../components/Header"
import Instruments from "../components/Instruments"
import AgeDisclaimer from "../components/AgeDisclaimer"
import Rates from "../components/Rates"
import Contact from "../components/Contact"
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <div>
      <BookingButton className="body_booking-button" />
      <header>
        <Header />
      </header>
      <main>
        <Cover />
        <Instruments />
        <AgeDisclaimer />
        <About />
        <Rates />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Larisa Bainton</footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <SEO />
