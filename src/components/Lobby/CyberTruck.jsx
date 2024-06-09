import React, { useState } from "react";
import { Link, Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import './CSSFiles/CyberTruck.css'

export default function CyberTruck() {
    
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        setIsVisible(isVisible);
    };
    return (
        <>
        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility={true}>
            <div className="cyberTruck-block">
                <div className={`mobileAnimation ${isVisible ? 'active' : ''}`} ></div>
                <div className="text-cybertruck"></div>
                <div className={`text-cybertruckMobile ${isVisible ? 'active' : ''}` }>
                    <button className="order-text-mobile">Order Now</button>
                </div>
                <button className="order-text">Order Now</button>
                <button className="learn-text">Learn More</button>
            </div>
            </VisibilitySensor>
        </>
    )
} 