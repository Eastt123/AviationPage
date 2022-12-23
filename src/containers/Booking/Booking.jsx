import React from 'react';
import { Options } from '../../components';
import "./booking.css";
import {calendar, profileUser, location} from "./imports";
const Booking = () => {
    return (
        <div className='aviation__booking'>
             <div className="aviation__booking-container_navigation">
            <div>
            <h3>economy</h3>
            </div>
            <div>
            <h3>business</h3>
            </div>
            <div>
            <h3>first</h3>
            </div>
            </div>
           <div className="aviation__booking-container">
           
            <div className="aviation__booking-container_options">
                <Options title="Location" text="Where are you going?" imgURL={location} />
                <Options title="Travelers" text="Add guest" imgURL={profileUser} />
                <Options title="Check-in" text="Add date" imgURL={calendar} />
                <Options title="Check-out" text="Add date" imgURL={calendar} />
            </div>
            <div className='aviation__booking-brtContainer'>
            <button className='aviation__booking-bookbtn'>book now</button>
            </div>
            </div>     
        </div>
    );
};

export default Booking;