import React from 'react';
import "./navbar.css";
import logo from "../../assets/logo.png";

const Menu = () => {
    return(
        <>
        <p><a href="#all">All Flight</a></p>
        <p><a href="#schedule">Schedule</a></p>
        <p><a href="#passangers">Passengers</a></p>
        <p><a href="#orders">Your Orders</a></p>
        </>
    )
}

const Navbar = () => {
    return (
        <div className='avition__navbar'>
            <div className="aviation__navbar-links">
            <div className="aviation__navbar-links_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="aviation__navbar-links_container">
            <Menu />
            </div>
            <div className="aviation__navbar-btn">
             <p>Let's Fly</p>
            </div>
            </div>
        </div>
    );
};

export default Navbar;