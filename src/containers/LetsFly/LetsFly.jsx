import React from 'react';
import "./LetsFly.css";
import { star, newyourk, clouds, AirplaneTicket, Rectangle9336, Rectangle9337, Rectangle9338 } from './imports';
const LetsFly = () => {
    return (
        <div className='aviation_letsFly section__padding'>
            <div className="aviation__letsFly-image-container">
                <div className="star">
                    <img src={star} alt="star" />
                </div>
                <div className="newyourk">
                <img src={newyourk} alt="newyourk" />
                </div>
                <div className="clouds">
                <img src={clouds} alt="clouds" />
                </div>
                <div className="airplaneticket">
                <img src={AirplaneTicket} alt="airplaneticket" />
                </div>
                <div className="image1">
                <img src={Rectangle9336} alt="Rectangle9336" />
                </div>
                <div className="image2">
                <img src={Rectangle9337} alt="Rectangle9337" />
                </div>
                <div className="image3">
                <img src={Rectangle9338} alt="Rectangle9338" />
                </div>
            </div>
            <div className="aviation__letsFly-text">
            <h4>Let’s Fly</h4>
            <h1>It’s one of the leading online flight booking platforms in the world</h1>
            <ul>
                <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                <li>If you are going to use a passage of Lorem Ipsum</li>
                <li>Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</li>
                <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
            </ul>
            <button><p>book now</p></button>
            </div>
        </div>
    );
};

export default LetsFly;