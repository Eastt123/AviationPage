import React from 'react';
import "./BstTraveler.css";
import img1 from "../../assets/Subtract.png";
import img2 from "../../assets/Subtract-1.png";
import img3 from "../../assets/Subtract-2.png";
import img4 from "../../assets/Subtract-3.png";
import photo1 from "../../assets/Ellipse734.png"
import photo2 from "../../assets/Ellipse734-1.png"
import photo3 from "../../assets/Ellipse734-2.png"
import photo4 from "../../assets/Ellipse734-3.png"
import Traveler from '../../components/traveler/Traveler';
const BstTraveler = () => {
    return (
        <div className='aviation_BstTraveler'>
                <div className="aviation__bstTraveler__travelers section__padding">
                    <h1>Best travelars of this month</h1>
                    <div className='aviation__bstTravelers__travelers-container'>
                    <Traveler img={img1} name="Raju Mullah" email="@rajumulllah" photo={photo1} />
                    <Traveler img={img2} name="Zaire Vetrovs" email="@zairevetrovs" photo={photo2} />
                    <Traveler img={img3} name="Marcus Dias" email="@marcusdias" photo={photo3} />
                    <Traveler img={img4} name="Davis Schleifer" email="@davisschleifer" photo={photo4} />
                    </div>
                </div>
        </div>
    );
};

export default BstTraveler;