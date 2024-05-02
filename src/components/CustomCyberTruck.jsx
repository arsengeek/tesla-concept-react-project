
import { useState } from "react"
import "./CSSFiles/CustomCyberTruck.css"


export default function CustomTesla() {
    const [selectColor, setColor] = useState('red')

    const handleMouseEnter = (menu) => {
        setColor(menu);
    };

    const handleMouseLeave = () => {
        setColor('red');
    };


    return (
        <>
        <div className="custom-block">
            <div className="moreCars">
                <div className={`red-tesla ${selectColor === 'red' ? 'active' : 'default'}`}></div>
                <div className={`purple-tesla ${selectColor === 'purple' ? 'active' : 'default'}`}></div>
                <div className={`blue-tesla ${selectColor === 'blue' ? 'active' : 'default'}`}></div>
            </div>

            <div className="displayColor">
                <h1 className="text-color">CYBERTRUCK COLOR PAINT FILM 
                 <span> COLOR  {selectColor.toUpperCase()}</span></h1>

                <button className="red" onClick={() => handleMouseEnter('red')}> </button>
                <button className="purple" onClick={() => handleMouseEnter('purple')}></button>
                <button className="blue" onClick={() => handleMouseEnter('blue')}></button>

                <h1 className="text-container">PURCHASE IN THE TESLA APP
    OPEN YOUR SMARTPHONE'S CAMERA AND SCAN THE QR CODE BELOW TO ACCESS THE TESLA APP

    IF YOU CAN'T SCAN THE QR CODE, COPY THIS LINK TO A MOBILE BROWSER: <a href='...'>HTTPS://SHOP.TESLA.COM/PRODUCT/CYBERTRUCK-COLOR-PAINT-FILM?SKU=2049765-00-A</a>
    

    <hr></hr><br></br><span>
    <span>DESCRIPTION </span>
    <br></br>
    WRAP YOUR CYBERTRUCK IN ONE OF OUR PREMIUM COLOR PAINT FILMS, ONLY AVAILABLE THROUGH TESLA.


    FEATURES AND BENEFITS:

    SELF-HEALING, URETHANE-BASED FILM
    2X THICKER THAN VINYL ON AVERAGE
    PROTECTS AGAINST SCRATCHES
    MORE ENVIRONMENTALLY FRIENDLY THAN TRADITIONAL VINYL WRAPS
    COVERS ALL EXTERIOR STAINLESS-STEEL SURFACES
    TESLA FILM FAQ

    VIEW WARRANTY FOR ADDITIONAL MATERIAL AND INSTALLATION DETAILS.</span>

    NOTE: PURCHASE PRICE INCLUDES COST OF MATERIALS AND INSTALLATION. LOANER VEHICLE WILL BE PROVIDED DURING INSTALLATION. CURRENT PARTICIPATING TESLA SERVICE CENTERS INCLUDE WEST COVINA, OCEANSIDE, COSTA MESA AND SANTA CLARA, CA AND AUSTIN, TX.</h1>
            </div>

            <div className="text-infoColor">
                
                <h1 className="purple-text"></h1>
                <h1 className="blue-text"></h1>
            </div>
        </div>
        </>
    )
}