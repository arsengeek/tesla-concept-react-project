import { useState } from 'react'
import './CSSFiles/Model_X_Section.css'

export default function Model_X_Section() {

    const [useTextMore, setText] = useState(null)

    const handleMouseEnter = (menu) => {
        setText(menu);
    };

    const handleMouseLeave = () => {
        setText(null);
    };

    const [useTextFunctions, setFunctionText] = useState(null)

    const handleMouseEnterFunc = (menu) => {
        setFunctionText(menu);
    };

    const handleMouseLeaveFunc = () => {
        setFunctionText(null);
    };

    return (
        <>
        <div className='block'>
            <h1 className='Model-X-text'>Model X</h1>
            <h1 className='Model-X-text-back'>From $63,990</h1>
            <h1 className='Model-X-text-back-more'>After Federal Tax Credit & Est. Gas Savings</h1>
            <div className='block-enter-mouse' onMouseLeave={handleMouseLeave}> 
            <div className='block-buttons' >
                <button className='functions' onMouseEnter={() => handleMouseEnter('functions')} >Functions -></button>
                <button className='relax' onMouseEnter={() => handleMouseEnter('relax')} >Relax -></button>
                <button className='speed' onMouseEnter={() => handleMouseEnter('speed')} >Speed -></button>
            </div>
                <h3 className={`more-info-functions ${useTextMore === 'functions' ? 'active' : ' '}`} ><h3 className={`text-more ${useTextMore === 'functions' ? 'active' : 'not-active'}`} > Tesla has more adaptive functions</h3>
                    <div className='grid-container'  onMouseLeave={handleMouseLeaveFunc}  >
                        <h4 className={`text-functions-autopilot ${useTextMore === 'functions' ? 'active' : 'not-active'}`} onMouseEnter={() => handleMouseEnterFunc('Autopilot')}  >Autopilot</h4> 
                        <h4 className={`text-functions-device ${useTextMore === 'functions' ? 'active' : 'not-active'}`} onMouseEnter={() => handleMouseEnterFunc('Device')}>Device</h4>
                        <h4 className={`text-functions-panel ${useTextMore === 'functions' ? 'active' : 'not-active'}`} onMouseEnter={() => handleMouseEnterFunc('Panel')}>Panel</h4>
                    </div>
                    <div className={`image-autopilot ${useTextFunctions ==='Autopilot' ? 'active': ' '}`}></div>
                </h3>
                <h3 className={`more-info-relax ${useTextMore === 'relax' ? 'active' : ' '}`} ><h3 className={`text-more-relax ${useTextMore === 'relax' ? 'active' : ' '}`} > Tesla has more adaptive functions</h3></h3>
            </div>
        </div>

        </>   
    )
}