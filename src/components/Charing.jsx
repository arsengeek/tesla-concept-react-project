import './CSSFiles/Charing.css'
import { useState } from 'react';

export default function CharingBlock() {
    
    const [action, setAction] = useState(false);

    const handleMouseEnter = () => {
        setTimeout(() => {
            setAction(true)
            setTimeout(() => {
                setAction(false)
                handleMouseEnter()
            }, 3000)
        }, 5000)
    }

    return ( 
        <>
        <div className='container'>
            <div className={`cahring-block ${action ? 'action' : 'default'}`} onMouseEnter={handleMouseEnter}>
                <h1 className={`text-assoseries ${action ? 'action' : 'default'}`}>Assesories</h1>
                <h1 className={`text-equipment ${action ? 'action' : 'default'}`}>Equipment</h1>
                <button className={`buy-button ${action ? 'action' : 'default'}`}>Buy Now</button>
            </div>
        </div>
        </>
    )
}