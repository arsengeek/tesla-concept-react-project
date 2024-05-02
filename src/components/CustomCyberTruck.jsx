
import { useState , useEffect} from "react"
import "./CSSFiles/CustomCyberTruck.css"
import ReactImageZoom from 'react-image-zoom';

export default function CustomTesla() {
    const [selectColor, setColor] = useState('red')

    const handleMouseEnter = (menu) => {
        setColor(menu);
    };

    const handleMouseLeave = () => {
        setColor('red');
    };

    useEffect(() => {
        const interval = setInterval(() => {
          const selectColor = ['red', 'white','black', 'blue', 'purple'];
          const randomColor = selectColor[Math.floor(Math.random() * selectColor.length)];
          setColor(randomColor);
        }, 15000);
    
      
        return () => clearInterval(interval);
      }, []); 

    return (
        <>
        <div className="custom-block">
            <div className="moreCars">
                <div className={`red-tesla ${selectColor === 'red' ? 'active' : 'default'}`}></div>
                <div className={`purple-tesla ${selectColor === 'purple' ? 'active' : 'default'}`}></div>
                <div className={`blue-tesla ${selectColor === 'blue' ? 'active' : 'default'}`}></div>
                <div className={`black-tesla ${selectColor === 'black' ? 'active' : 'default'}`}></div>
                <div className={`white-tesla ${selectColor === 'white' ? 'active' : 'default'}`}></div>
                <div className={`gold-tesla ${selectColor === 'gold' ? 'active' : 'default'}`}></div>
            </div>

            <div className="displayColor">
                <h1 className="text-color">CYBERTRUCK COLOR PAINT FILM 
                 <span> COLOR  {selectColor.toUpperCase()} - {selectColor === 'black' || selectColor === 'white' ? '6000$' : '6500$'}</span></h1>

                <button className="red" onClick={() => handleMouseEnter('red')} > </button>
                <button className="purple" onClick={() => handleMouseEnter('purple')}></button>
                <button className="blue" onClick={() => handleMouseEnter('blue')}></button>
                <button className="black" onClick={() => handleMouseEnter('black')}></button>
                <button className="white" onClick={() => handleMouseEnter('white')}></button>
                <button className="gold" onClick={() => handleMouseEnter('gold')}></button>

                <h1 className="text-container">PURCHASE IN THE TESLA APP
        OPEN YOUR SMARTPHONE'S CAMERA AND SCAN THE QR CODE BELOW TO ACCESS THE TESLA APP

        <img className="qr-code" src="src/assets/photo_2024-05-02_16-06-15.jpg"></img>
        <hr></hr>
        IF YOU CAN'T SCAN THE QR CODE, COPY THIS LINK TO A MOBILE BROWSER: <a href='...'>HTTPS://SHOP.TESLA.COM/PRODUCT/CYBERTRUCK-COLOR-PAINT-FILM?SKU=2049765-00-A</a>
    

    <hr></hr><br></br><span>
    <span >DESCRIPTION: </span>
    <br></br><br></br>
    WRAP YOUR CYBERTRUCK IN ONE OF OUR PREMIUM COLOR PAINT FILMS, ONLY AVAILABLE THROUGH TESLA.

        <br></br><br></br>
    <span style={{marginLeft: '12vw'}}>MORE:</span><br></br><hr></hr>
    
    <li>SELF-HEALING, URETHANE-BASED FILM</li>
    <li>2X THICKER THAN VINYL ON AVERAGE</li>
    <li>PROTECTS AGAINST SCRATCHES</li>
    <li>MORE ENVIRONMENTALLY FRIENDLY THAN TRADITIONAL VINYL WRAPS</li>
    <li>COVERS ALL EXTERIOR STAINLESS-STEEL SURFACES</li>
    <br></br>
    <span>TESLA FILM FAQ</span>
        <hr></hr>
        
    VIEW <a href='...' style={{width: '10px'}}>WARRANTY</a> FOR ADDITIONAL MATERIAL AND INSTALLATION DETAILS.</span>
        <br></br>
        <span style={{color: 'rgb(116, 116, 116)'}}>NOTE:</span> PURCHASE PRICE INCLUDES COST OF MATERIALS AND INSTALLATION. LOANER VEHICLE WILL BE PROVIDED DURING INSTALLATION. CURRENT PARTICIPATING TESLA SERVICE CENTERS INCLUDE WEST COVINA, OCEANSIDE, COSTA MESA AND SANTA CLARA, CA AND AUSTIN, TX.</h1>
            </div>

            <div className="text-infoColor">
                
            </div>
        </div>
        </>
    )
}