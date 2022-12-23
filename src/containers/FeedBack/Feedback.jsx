import React from 'react';
import "./Feedback.css";
import img1 from "../../assets/Ellipse746.png"
import img2 from "../../assets/Ellipse747.png"
import img3 from "../../assets/Ellipse748.png"
import img4 from "../../assets/Ellipse749.png"
import img5 from "../../assets/Ellipse750.png"
import img6 from "../../assets/Ellipse751.png"
import img7 from "../../assets/Ellipse752.png"
import Star from "../../assets/reitingStar.png"
import rightArrow from "../../assets/rightArrow.svg"
import leftArrowBlack from "../../assets/leftArrowBlack.svg"

const Feedback = () => {
    return (
        <div className='aviation__feedback'>
            <div className='aviation__feedback-heading'>
            <p>What’s our customer saying</p>
            <h2>Our Customer Feedback</h2>
            </div>
            <div className='aviation__feedback__cotainer'>
            <div className='aviation__feedback__container-icons'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            </div>
            <div className='aviation__feedback__container-user'>
                <div className='aviation__feedback__container__user-container'>
                <img src={img3} alt="" />
                <div>
                    <h4>Jaylon Vaccaro</h4>
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                </div>
                </div>

                <div className="aviation__feedback__container__user-text">
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don
                    </p>
                </div>
                <div className='aviation__feedback-nav'>
                    <button>
                    <img src={leftArrowBlack} alt="" />
                    </button>
                    <button>
                <img src={rightArrow} alt="" />
                    </button>
                </div> 
            </div>
            </div>
               
        </div>
    );
};

export default Feedback;