import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Cover = () => {
    return (
        <div className="cover">
            <StaticImage className="cover_image"src="../images/cover.jpg" alt="Room with instruments"/>
            <div className="cover_title">Voice, Piano, and Guitar Lessons</div>
        </div>
    )
}

export default Cover;