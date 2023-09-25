import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const paragraph = "Larisa is a soprano and voice teacher who has been working in the Boston area since 2016. In 2020 she completed a Masters Degree in Vocal Pedagogy at the New England Conservatory (NEC). She has worked as an instructor at the Eclectic School of Music (Atlanta, GA), as a teaching assistant at NEC, and at the Amy Dancz Studio (Boston, MA). Her in-person private studio is located in Malden, MA."

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about_image">
                <StaticImage src="../images/headshot.jpg" alt="Larisa Bainton headshot" />
            </div>
            <div className="about_text">
                <div className="about_text_title">About Me</div>
                <div className="about_text_paragraph">{paragraph}</div>
            </div>
        </div>
    )
}

export default About;