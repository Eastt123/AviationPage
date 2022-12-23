import React from 'react';
import "./features.css";
import Feature from '../../components/feature/Feature';
import travel from "../../assets/travel.svg";
import discount from "../../assets/discount.svg";
import lock from "../../assets/lock.svg";
import support from "../../assets/Group.svg"
const featureData = [
{
    imgURL:travel,
    title:"Best Guide",
    text:"Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
},
{
    imgURL:discount,
    title:"More Discount",
    text:"Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
},
{
    imgURL:lock,
    title:"Private",
    text:"Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
},
{
    imgURL:support,
    title:"Online Support",
    text:"Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna."
},
]
const Features = () => {
    return (
        <div className='aviation__features section__padding'>
            <div className="aviation__features-heading">
                <h1>our features</h1>
            </div>

            <div className="aviation__features-container">
                {featureData.map((feature, index) => {
                    return(
                        <Feature imgURL={feature.imgURL} text={feature.text} title={feature.title} />
                    )
                })}
            </div>
        </div>
    );
};

export default Features;