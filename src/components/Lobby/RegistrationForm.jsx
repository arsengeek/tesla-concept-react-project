
import './CSSFiles/RegistrationForm.css'
import { useState } from "react";

export default function registrationForm() {

    const [form, setChange] = useState({
        email: '',
        password: ''
    })

    function handleEmailChange(event) {
        setChange(event.target.value)
    } 


    return (
        <>
            <div className='block-registration'>
                <video className='back-video' type='video.mp4' src='src/assets/videoplaybackLogin.mp4' muted autoPlay loop></video>
                <h1 className='login-form'>Login</h1>
                <div className='grid-container'>
                    <label htmlFor='email'>Email or Number Phone</label>
                    <input type='email' id='email' className='text-input' value={form.email} onChange={handleEmailChange}></input>

                    <label htmlFor='form.password'>Password</label>
                    <input type='text' id='password' className='text-input' value={form.password} onChange={handleEmailChange}></input>
                    <button type='submit' className='button-login'  disabled={form.email === '' && form.password === '' ? true : false } >Login</button>
                </div>
            </div>

        
        
        </>
    )
}