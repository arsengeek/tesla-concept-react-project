import './DropDownMenu.css'
import BackVideo from './BackVideo.jsx'
import { useState } from 'react'

export default function DropDownMenu() {
    const [isOpen, setOpen] = useState(false)

    const handleMouseEnter = () => {
        setOpen(true); 
    };

    const handleMouseLeave = () => {
        setOpen(false); 
    };

    return (
        <>
        

        <a href='...' className="headerLogo"><img src='src/assets/Tesla,_Inc.-Logomark-Black-Logo.wine.svg'></img></a>
            <button className="drop-menu" onMouseEnter={handleMouseEnter}> Veicles</button>
            <button className="drop-menu">Energy</button>
            <button className="drop-menu">Charging</button>
            <nav className={`navigation ${isOpen ? 'active' : ''}`} onMouseLeave={handleMouseLeave} >
                <ul className="menu-list">
                    <li className="menu-items"><a className='tesla_a' href='...'> <img className='model_s_img' src='src/assets/Tesla-Model-S-PNG.png'></img>Model S</a><a href='...'>Learn</a></li>
                    <li className="menu-items"><a className='tesla_a' href='...'> <img className='model_3_img' src='src/assets/tesla-model-3-2022-0099.png'></img>Model 3</a><a href='...'>Learn</a></li>
                    <li className="menu-items"><a className='tesla_a' href='...'> <img className='model_x_img' src='src/assets/2020-tesla-model-x-2.avif'></img>Model X</a><a href='...'>Learn</a></li>
                    <li className="menu-items"><a className='tesla_a' href='...' > <img className='model_y_img' src='src/assets/Tesla-Model-S-PNG.png'></img>Model Y</a><a href='...'>Learn</a></li>
                    <li className="menu-items-top-margin"><a className='tesla_a' href='...' > <img className='model_cybertruck_img' src='src/assets/Tesla-Model-S-PNG.png'></img>CyberTruck</a><a href='...'>Learn</a></li>
                </ul>
                <ul className='menu-list-support'>
                    <li className="menu-items-support"><a></a>Inventory</li>
                    <li className="menu-items-support"><a></a>Used Cars</li>
                    <li className="menu-items-support"><a></a>Demo Drive</li>
                    <li className="menu-items-support"><a></a>Trade-in</li>
                    <li className="menu-items-support"><a></a>Compare</li>
                    <li className="menu-items-support"><a></a>Help Me Charge</li>
                    <li className="menu-items-support"><a></a>Roadster</li>
                </ul>
                
            </nav> 
            <BackVideo/>
        </>
    )
}