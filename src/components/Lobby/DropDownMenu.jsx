import './CSSFiles/DropDownMenu.css'

import { useState } from 'react'


export default function DropDownMenu() {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const [activeMenuMobile, setActiveMenuMobile] = useState(null);

    const handleMouseEnterMenuMobile = () => {
        setActiveMenuMobile(true);
    };

    const handleMouseLeaveMenuMobile = () => {
        setActiveMenuMobile(false);
    };
    return (
        <>

            <a href='' className="headerLogo"><img src='src/assets/Tesla,_Inc.-Logomark-Black-Logo.wine.svg' alt="Tesla Logo" /></a>
            <div className={`logoMobileVersion ${activeMenuMobile ? 'active' : ''}`} onClick={handleMouseEnterMenuMobile}>
                

            </div>
            <div className={`menu-mobile ${activeMenuMobile ? 'active' : ''}`}>
                <div className='grid-container-mobile'>
                    <h1 className='logoMobile'></h1>
                    <li>- Vehicles</li>
                    <li>- Energy</li>
                    <li>- Charging</li>
                    <li>- Discover</li>
                </div>
            </div>
                {activeMenuMobile && <div className="backdrop" onClick={handleMouseLeaveMenuMobile}> Back</div>}
                
            <div className='buttons-menu'>
                <button className="drop-menu" onMouseEnter={() => handleMouseEnter('vehicles')} >Vehicles</button>
                <button className="drop-menu" onMouseEnter={() => handleMouseEnter('energy')}>Energy</button>
                <button className="drop-menu" onMouseEnter={() => handleMouseEnter('charging')}>Charging</button>
                <button className="drop-menu" onMouseEnter={() => handleMouseEnter('discover')}>Discover</button>
            </div>
            <div className="dropdown-container" onMouseLeave={handleMouseLeave}>
            <nav className={`navigation ${activeMenu === 'vehicles' ? 'active' : ''}`}  >
                
                <ul className="menu-list">
                
                <li className="menu-items"><a className={ `tesla_a ${activeMenu === 'vehicles' ? 'active' : ''}`} href='...'> <img className='model_s_img' src='src/assets/Tesla-Model-S-PNG.png'></img>Model S</a><a href='...'>Learn</a></li>
                <li className="menu-items"><a className={ `tesla_a ${activeMenu === 'vehicles' ? 'active' : ''}`} href='...'> <img className='model_3_img' src='src/assets/tesla-model-3-2022-0099.png'></img>Model 3</a><a href='...'>Learn</a></li>
                <li className="menu-items"><a className={ `tesla_a ${activeMenu === 'vehicles' ? 'active' : ''}`} href='...'> <img className='model_x_img' src='src/assets/2020-tesla-model-x-2.avif'></img>Model X</a><a href='...'>Learn</a></li>
                <li className="menu-items"><a className={ `tesla_a ${activeMenu === 'vehicles' ? 'active' : ''}`} href='...' > <img className='model_y_img' src='src/assets/teslamodely.webp'></img>Model Y</a><a href='...'>Learn</a></li>
                <li className="menu-items-top-margin"><a className={ `tesla_a ${activeMenu === 'vehicles' ? 'active' : ''}`} href='...' > <img className='model_cybertruck_img' src='src/assets/download-free-tesla-cybertruck-png-images-90013.png'></img>CyberTruck</a><a href='...'>Learn</a></li>
            </ul>
            <ul className='menu-list-support'>
                <li className="menu-items-support"><a>Inventory</a></li>
                <li className="menu-items-support"><a>Used Cars</a></li>
                <li className="menu-items-support"><a>Demo Drive</a></li>
                <li className="menu-items-support"><a>Trade-in</a></li>
                <li className="menu-items-support"><a>Compare</a></li>
                <li className="menu-items-support"><a>Help Me Charge</a></li>
                <li className="menu-items-support"><a>Roadster</a></li>
            </ul>
                
            </nav>

            <nav className={`navigation-energy ${activeMenu === 'energy' ? 'active' : ''}`} >
                <ul className="menu-list1">
                    <li className='menu-items'><a className='enegry' href='...'> <img className='solar-panel' src='src/assets/monocrystalline-solar-panels-cell-PO93E48-600.jpg' ></img>Solar Panel</a><a href='...'>Learn</a></li>
                    <li className='menu-items'><a className='enegry' href='...'> <img className='solar-roof' src='src/assets/Solar_Roof_Deck_800x800_8dd386b7-bbbe-4dbb-87a9-72e0c588f80a_800x800.webp' ></img>Roof Panel</a><a href='...'>Learn</a></li>
                    <li className='menu-items'><a className='enegry' href='...'> <img className='powerwall' src='src/assets/d.png' ></img>PowerWall</a><a href='...'>Learn</a></li>
                    <li className='menu-items'><a className='enegry' href='...'> <img className='megapack' src='src/assets/net1_04.jpg' ></img>MegaPack</a><a href='...'>Learn</a></li>
                </ul>
                <ul className='menu-list-support'>
                    <li className="menu-items-support"><a></a>Schedule a Consultation</li>
                    <li className="menu-items-support"><a></a>Why Solar</li>
                    <li className="menu-items-support"><a></a>Incentives</li>
                    <li className="menu-items-support"><a></a>Support</li>
                    <li className="menu-items-support"><a></a>Partner with Tesla</li>
                    <li className="menu-items-support"><a></a>Commercial</li>
                    <li className="menu-items-support"><a></a>Utilities</li>
            </ul>
            </nav>

            <nav className={`navigation-charging ${activeMenu === 'charging' ? 'active' : ''}`} >
                <ul className="menu-list2">
                    <li className='menu-items'><a className='charging' href='...'> <img className='charging-img' src='src/assets/1602176024593.png' ></img>Charging</a><a href='...'>Learn</a></li>
                    <li className='menu-items'><a className='charging' href='...'> <img className='super-charging' src='src/assets/125-1250645_tesla-charging-station-transparent-hd-png-download.png' ></img>SuperCharging</a><a href='...'>Learn</a></li>
                </ul>

                <ul className='menu-list-support'>
                    <li className="menu-items-support"><a></a>Help Me Charge</li>
                    <li className="menu-items-support"><a></a>Charging Calculator</li>
                    <li className="menu-items-support"><a></a>Trip Planner</li>
                    <li className="menu-items-support"><a></a>Charging With NACS</li>
                    <li className="menu-items-support"><a></a>Supercharger Voting</li>
                    <li className="menu-items-support"><a></a>Host a Supercharger</li>
                    <li className="menu-items-support"><a></a>Commercial Charging</li>
            </ul>
            </nav>

            <nav className={`navigation-discover ${activeMenu === 'discover' ? 'active' : ''}`} >
            <ul className='menu-list-discover'>
                    <li className="menu-items-support-title"><a></a>Resources</li>
                    <li className="menu-items-support"><a></a>Demo Drive</li>
                    <li className="menu-items-support"><a></a>Insurance</li>
                    <li className="menu-items-support"><a></a>Video Guidesr</li>
                    <li className="menu-items-support"><a></a>Customer Stories</li>         
            </ul>
            <ul className='menu-list-discover'>
            <   li className="menu-items-support-title"><a></a>Location Services</li>
                    <li className="menu-items-support"><a></a>Find Us</li>
                    <li className="menu-items-support"><a></a>Trip Planner</li>
                    <li className="menu-items-support"><a></a>Find a Collision Center</li>
                    <li className="menu-items-support"><a></a>Find a Certified Installer</li>    
            </ul>
            <ul className='menu-list-discover'>
                <li className="menu-items-support-title"><a></a>Company</li>
                    <li className="menu-items-support"><a></a>About</li>
                    <li className="menu-items-support"><a></a>Careers</li>
                    <li className="menu-items-support"><a></a>Investor Relations</li>  
            </ul>
            </nav>
            </div>
        </>
    );
}