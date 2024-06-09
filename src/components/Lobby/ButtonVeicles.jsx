
export default function button1(onMouseEnter) {

    
    return (
        <>
        <button className="drop-menu" >Veicles</button>

        <nav className={`navigation ${onMouseEnter ? 'active' : ''}`} onMouseLeave={handleMouseLeave} >
                    <ul className="menu-list">
                        <li className="menu-items"><a className='tesla_a' href='...'> <img className='model_s_img' src='src/assets/Tesla-Model-S-PNG.png'></img>Model S</a><a href='...'>Learn</a></li>
                        <li className="menu-items"><a className='tesla_a' href='...'> <img className='model_3_img' src='src/assets/tesla-model-3-2022-0099.png'></img>Model 3</a><a href='...'>Learn</a></li>
                        <li className="menu-items"><a className='tesla_a' href='...'> <img className='model_x_img' src='src/assets/2020-tesla-model-x-2.avif'></img>Model X</a><a href='...'>Learn</a></li>
                        <li className="menu-items"><a className='tesla_a' href='...' > <img className='model_y_img' src='src/assets/teslamodely.webp'></img>Model Y</a><a href='...'>Learn</a></li>
                        <li className="menu-items-top-margin"><a className='tesla_a' href='...' > <img className='model_cybertruck_img' src='src/assets/download-free-tesla-cybertruck-png-images-90013.png'></img>CyberTruck</a><a href='...'>Learn</a></li>
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
        </>
    )
}