import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Guitar = () => {
    return (
        <li className="instruments_list-item" key="guitar description">
            <div className="instruments_list-item_image">
                <StaticImage src="../images/guitar.jpg" alt="5 string instruments on the wall" />
            </div>
            <div className="instruments_list-item_text">
                <div className="instruments_list-item_title">Guitar</div>
                <div className="instruments_list-item_description">Guitar lessons will primarily focus on learning chords, finger-picking, and songwriting. Learn how to accompany yourself on the guitar while singing, figure out the chords from your favorite songs, and more!</div>
            </div>
        </li>
    )
}

const Piano = () => {
    return (
        <li className="instruments_list-item" key="piano description">
            <div className="instruments_list-item_image">
                <StaticImage src="../images/piano.jpg" alt="Piano close up"/>
            </div>
            <div className="instruments_list-item_text">
                <div className="instruments_list-item_title">Piano</div>
                <div className="instruments_list-item_description">Piano lessons begin with the student's goals: whether you want to play along to your favorite pop songs, learn Beethoven sonatas, or write your own songs. All students can expect to improve (or learn) reading music, develop a technique to play without injury, and learn musicianship skills.</div>
            </div>
        </li>
    )
}

const Voice = () => {
    return (
        <li className="instruments_list-item" key="voice description">
            <div className="instruments_list-item_image">
                <StaticImage src="../images/voice.jpg" alt="Bust statue of Mozart"/>
            </div>
            <div className="instruments_list-item_text">
                <div className="instruments_list-item_title">Voice</div>
                <div className="instruments_list-item_description">In voice lessons you can expect to learn the fundamentals of singing technique: vowels, breath, and phonation! For younger students we will also learn to read music and practice sight singing. But mostly, lessons will be spent working on repertoire. Learn how to sing the songs you love!</div>
            </div>
        </li>
    )
} 

const Instruments = () => {
    return (
        <div className="instruments">
            <ul className="instruments_list">
                <Voice />
                <Piano />
                <Guitar />
            </ul>
        </div>
    )
};

export default Instruments;