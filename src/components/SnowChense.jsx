import { useState } from 'react'
import './CSSFiles/SnowChanse.css'

export default function SnowChanse() {
    const [stateChanse, setChanse] = useState(false)

    const handleMouseEnter = () => setTimeout(() => {
        setChanse(true);
    }, 200);
        

    return (
        <>
        <div className='transparent-block' onMouseEnter={handleMouseEnter} >
            <div className="block-chanse">
                <div className={`image-chanse ${stateChanse ? 'active' : ''}`}></div>
                <div className={`text-chanse ${stateChanse ? 'active' : ''}`}>
                    <a className={`text-info-chanse ${stateChanse ? 'active' : 'default'}`}>CYBERTRUCK 20" SNOW CHAINS</a>
                    <a className={`text-info-chanse ${stateChanse ? 'active' : 'default'}`}>THE KÖNIG XD-16 PRO SNOW CHAIN PROVIDES SUPERIOR TRACTION, DRIVING COMFORT AND PERFORMANCE IN SNOWY CONDITIONS. EASY TO INSTALL, THE PATENTED MICRO-REGULATION SYSTEM OFFERS PERFECT CHAIN SELF-TENSIONING AND EXCELLENT TRACTION. APPROVED FOR TESLA-MANUFACTURED 20” WHEELS AND TESLA-APPROVED 20” TIRES FOR CYBERTRUCK.</a>
                    <button className={`text-info-chanse ${stateChanse ? 'active' : 'default'}`}>Check More</button>
                </div>
                </div>
            </div>
        </>
    )
}