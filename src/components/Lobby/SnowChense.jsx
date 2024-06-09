import { useState } from 'react'
import './CSSFiles/SnowChanse.css'
import VisibilitySensor from 'react-visibility-sensor';

export default function SnowChanse() {
    // const [stateChanse, setChanse] = useState(false)

    // const handleMouseEnter = () => setTimeout(() => {
    //     setChanse(true);
    // }, 200);
        
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = (isVisible) => {
        setIsVisible(isVisible);
    }
    return (
        <>
        <VisibilitySensor onChange={handleMouseEnter} partialVisibility={true}>
        <div className='transparent-block'  >
            <div className="block-chanse">
                <div className={`image-chanse ${isVisible ? 'active' : ''}`}></div>
                <div className={`text-chanse ${isVisible ? 'active' : ''}`}>
                    <a className={`text-info-chanse ${isVisible ? 'active' : 'default'}`}>CYBERTRUCK 20" SNOW CHAINS</a>
                    <a className={`text-info-chanse ${isVisible ? 'active' : 'default'}`}>THE KÖNIG XD-16 PRO SNOW CHAIN PROVIDES SUPERIOR TRACTION, DRIVING COMFORT AND PERFORMANCE IN SNOWY CONDITIONS. EASY TO INSTALL, THE PATENTED MICRO-REGULATION SYSTEM OFFERS PERFECT CHAIN SELF-TENSIONING AND EXCELLENT TRACTION. APPROVED FOR TESLA-MANUFACTURED 20” WHEELS AND TESLA-APPROVED 20” TIRES FOR CYBERTRUCK.</a>
                    <button className={`text-info-chanse ${isVisible ? 'active' : 'default'}`}>Check More</button>
                </div>
                </div>
            </div>
            </VisibilitySensor>
        </>
    )
}