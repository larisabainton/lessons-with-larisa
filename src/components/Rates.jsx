import React from "react";

const hourlyRate = 94;

const Rates = () => {
    return (
        <div className="rates">
            <div className="rates_title">Rates</div>
            <ul className="rates_list">
                <li className="rates_list-item" key="30 minute rate">
                    <div className="rates_list-item_title">30 Minute Lesson</div>
                    <div className="rates_list-item_price">${hourlyRate * .5}</div>
                </li>
                <li className="rates_list-item" key="45 minute rate">
                    <div className="rates_list-item_title">45 Minute Lesson</div>
                    <div className="rates_list-item_price">${hourlyRate * .75}</div>
                </li>
                <li className="rates_list-item" key="60 minute rate">
                    <div className="rates_list-item_title">60 Minute Lesson</div>
                    <div className="rates_list-item_price">${hourlyRate}</div>
                </li>
            </ul>
        </div>
    )
};

export default Rates;