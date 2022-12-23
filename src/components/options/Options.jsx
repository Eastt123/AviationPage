import React from 'react';
import "./options.css"
const Options = ({title, text, imgURL}) => {
    return (
        <div className='aviation__options'>
            <div className='aviation__options-image'>
                <img src={imgURL} alt="" />
            </div>
            <div className='aviation__options-text'>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Options;