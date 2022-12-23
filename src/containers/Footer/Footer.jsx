import React from 'react';
import "./Footer.css";
import Logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
const Footer = () => {
    return (
        <div className='aviation__footer'>
            <div className='aviation__footer-container'>
            <div>
                <img src={Logo} alt="logo" />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                <div className='aviation__footer-social'>
                    <img src={Facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={linkedin} alt="LinkedIn" />
                </div>
            </div>
            <div className='aviation__footer-adress'>
                <h4>Address</h4>
                <p>Integrations</p>
                <p>Hello</p>
                <p>Intercom</p>
                <p>Customer</p>
            </div>
            <div className='aviation__footer-about'>
                <h4>About</h4>
                <p>Our Blog</p>
                <p>Customers</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Integrations</p>
            </div>
            <div className='aviation__footer-support' >
                <h4>Support</h4>
                <p>Test Zoom</p>
                <p>Account</p>
                <p>Support Center</p>
                <p>Live Training</p>
                <p>Accessibility</p>
            </div>

            </div>

            <div className='aviation__footer-copyright'>
            <p>Copyright &#169; FT PLANE 2022 All right reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;