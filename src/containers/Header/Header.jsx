import React from 'react';
import "./header.css";
import plane from "../../assets/plane.png";
import shadow from "../../assets/shadow.png"
const Header = () => {
    return (
        <div className='aviation__header'>
            <div className="aviation__header-content">
            <div className="aviation__header-content-plane">
            <img src={plane} alt="plane" />
            <div className='shadow'>
            <img src={shadow} alt="" />
            </div>
            </div>
            
            <div className="aviation__header-content-text">
                <h2>Travel around the world</h2>
                <p>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
            </div>
            </div>
        </div>
    );
};

export default Header;