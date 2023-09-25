import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Cover = () => {
    return (
        <div className="cover">
            <StaticImage src="../images/cover.png" alt="Room with instruments"/>
        </div>
    )
}

export default Cover;