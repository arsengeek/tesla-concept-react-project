import DropDownMenu from "./DropDownMenu";
import './CSSFiles/Header.css'
import { useState } from "react";

export default function Header() {

    const [buttonLang, setAcive] = useState(false) ;
    
    return (
    <>

    <DropDownMenu/>
    <header className="header">
        <div onMouseEnter={() => setAcive(true)  } href="..."><img className='language-image' src="src/assets/language_circle_icon_243487.png"></img></div>

        <div className= {`language-block ${buttonLang ? 'active' : 'default' }`} onMouseLeave={() => {setAcive(false); setTimeout(() => {setAcive(false)}, 5000)}}>
            <button className={`language ${buttonLang ? 'active' : 'default' }`} >RU</button>
            <button className={`language ${buttonLang ? 'active' : 'default' }`} >EN</button>
            <button className={`language ${buttonLang ? 'active' : 'default' }`} >Ro</button>
            <button className={`language ${buttonLang ? 'active' : 'default' }`} >Po</button>
        </div>
        </header>
    </>
    )
}