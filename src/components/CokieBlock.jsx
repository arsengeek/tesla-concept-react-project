import { useState } from 'react'
import './CSSFiles/CokieBlock.css'

export default function CookieBlock() {
    
    const [form, setButtonCookie] = useState(false)

    return (
        <>
            <div className={`block-cookie ${form ? 'active' : ''}`}>
                <h2 className='cookie-text'>For safety you need to accept cookie files</h2>
                <button className='button-accept'  onClick={() => setButtonCookie(true)}>Accept All</button>
                <button className='button-not-accept' onClick={() => setButtonCookie(true)}>Not Accept</button>
            </div>
        </>
    )
}
