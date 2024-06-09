import { useState } from 'react'
import './CSSFiles/Recomendation.css'

export default function Recomendation() {

    const [inIages, setImages] = useState(null)

    const handleMouseEnter = (menu) => {
        setImages(menu)
    }

    const handleMouseLeave = () => {
        setImages(null)
    }

    return (
        <>
        <div className='block-recomendation'>
            <h1 className='text-recomenddation'>RECOMMENDED PRODUCTS</h1>
            <div className='containerProducts'>
                <div className={`product_1 ${inIages === 'product_1' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('product_1')} onMouseLeave={handleMouseLeave}></div>
                <h1 className='product-1-text'>MODEL Y ALL-WEATHER INTERIOR LINERS<br></br><span>225$</span></h1>
                <div className={`product_2 ${inIages === 'product_2' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('product_2')} onMouseLeave={handleMouseLeave}></div>
                <h1 className='product-2-text'>RELAXED T LOGO HAT<br></br><span>30$</span></h1>
                <div className={`product_3 ${inIages === 'product_3' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('product_3')} onMouseLeave={handleMouseLeave}></div>
                <h1 className='product-3-text'>OFF THE ROAD VESSEL<br></br><span>40$</span></h1>

            
            </div>

            <h1 className='footer'>TESLA © 2024 PRIVACY & LEGAL LOCATIONS</h1>
        </div>




        </>
    )
}