import React from 'react';
import "./Traveler.css"
const Traveler = ({img, name, email, photo}) => {
    return (
        <div className='aviation__traveler'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Traveler;