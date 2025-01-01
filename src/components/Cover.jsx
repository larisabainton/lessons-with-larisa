import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Cover = () => {
    return (
        <div className="cover">
            <div className="cover_background">
                <StaticImage className="cover_image"src="../images/cover.jpg" alt="Room with instruments"/>
            </div>
            <div className="cover_title">
                <div>Voice,</div>
                <div>Piano,</div>
                <div>& Guitar Lessons</div>
            </div>
        </div>
    )
}

export default Cover;