import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const paragraph = "Larisa is a pianist, guitarist, and classically trained soprano who has been performing in the greater Boston area for over a decade. She completed the dual degree program at the University of Rochester and Eastman School of Music, receiving a Bachelor of Arts in Brain & Cognitive Sciences, and a Bachelor of Music in Vocal Performance. Larisa received her Master of Music in Vocal Pedagogy from New England Conservatory. As part of her continuing education she completed a certificate in Accessible Music Education through the Berklee College of Music."

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about_image">
                <StaticImage src="../images/headshot.jpg" alt="Larisa Bainton headshot" />
            </div>
            <div className="about_text">
                <div className="about_text_title">About</div>
                <div className="about_text_paragraph">{paragraph}</div>
            </div>
        </div>
    )
}

export default About;