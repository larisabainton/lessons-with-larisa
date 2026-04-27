import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const paragraph = "Larisa teaches from the First Congregational Church in Melrose in Room 1."

const Location = () => {
    return (
        <div className="location" id="location">
            <div className="location_image">
                <StaticImage src="../images/church.png" alt="FCC Church in Melrose" />
            </div>
            <div className="location_text">
                <div className="location_text_title">Location</div>
                <div className="location_text_paragraph">{paragraph}</div>
            </div>
        </div>
    )
}

export default Location;