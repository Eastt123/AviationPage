import React from 'react';
import "./feature.css";
import arrow from "../../assets/arrow.svg"
const Feature = ({imgURL, title, text}) => {
    return (
        <div className='aviation__features-feature'>
            <div className="aviation__features__feature-img">
                <img src={imgURL} alt="" />
            </div>
            <div className="aviation__featues__feature-text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className="aviation__features__feature-btn">
                <button>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default Feature;