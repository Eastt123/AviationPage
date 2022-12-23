import React from 'react';
import "./Memory.css";
import img1 from "../../assets/Rectangle 41.png"
import img2 from "../../assets/Rectangle 38.png"
import img3 from "../../assets/Rectangle 39.png"
import img4 from "../../assets/Rectangle 40.png"
const Memory = () => {
    return (
        <div className='aviation__memory section__padding'>
            <h1>Make memories with us</h1>
            <div className='aviation__memory-imgs'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Memory;