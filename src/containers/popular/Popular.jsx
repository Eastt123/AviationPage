import React from 'react';
import "./Popular.css";
import earth from "../../assets/AirDelivery.png"
import planeIcon from "../../assets/planeIcon.png";
import barcode from "../../assets/barcode.png";
import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";
import { Input } from '../../components';
const Popular = () => {
    return (
        <div className='aviation__popular'>
            <div className="aviation__popular-container">
            <div className="aviation__popular-heading">
                <h1>Book Popular Flight Tickets</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <div className='aviation__popular__heading-image'>
                    <img src={earth} alt="" />
                </div>
            </div>
            <div className='aviation__popular-tickets'>
            <div className="aviation__popular__tickets-container">
                <div className="aviation__popular__inputs">
                    <div className="aviation__popular__inputs-heading">
                        <h4>Economy Saver</h4>
                        <div className="aviation__popular__inputs__heading-directions">
                            <h4>uk</h4>
                            <img src={planeIcon} alt="" />
                            <h4>bd</h4>
                        </div>
                    </div>
                    <div className="aviation__popular__inputs__container">
                       <h3>6 Flight  Tickets</h3>
                       <div className='aviation__popular__inputs-container'>
                       <Input title="Passenger" text="Raju Mullah" />
                       <Input title="Flight" text="#5486626661" />
                       <Input title="Class" text="Economy" />
                       <Input title="Date" text="20 Nov 2022" />
                       <Input title="Gate" text="20 A" />
                       <Input title="Seats" text="5B - 11B" />
                       </div>
                    </div>
                </div>
                <div className='aviation__popular__ticket__container-dashes'></div>
                <div className="aviation__popular__inputs-barcode">
                <img src={barcode} alt="barcode" />
            </div>
            <div className="backgroundOne">
            </div>
            <div className="backgroundTwo">
            </div>
            <div className="backgroundThree">
            </div>
            </div>
           
            <div className='aviation__popular__tickets__navigation'>
                <div className="aviation__popular__tickets__navigation-dots">
                    <div className='aviation__popular__tickets__navigation-dot'></div>
                    <div className='aviation__popular__tickets__navigation-dot'></div>
                    <div className='aviation__popular__tickets__navigation-dot'></div>
                    <div className='aviation__popular__tickets__navigation-dot'></div>
                    <div className='aviation__popular__tickets__navigation-dot'></div>
                    <div className='aviation__popular__tickets__navigation-dot'></div>
                </div>
                <div className="nav-dashes"></div>
                <div className="aviation__popular__tickets__navigation-btn">
                    <button><img src={leftArrow} alt="leftArrow" /></button>
                    <button><img src={rightArrow} alt="rightArrow" /></button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Popular;