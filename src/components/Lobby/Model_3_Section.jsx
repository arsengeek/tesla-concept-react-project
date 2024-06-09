import './CSSFiles/BackVideo.css'
import React from 'react';

export default function Model_3_Section() {
   return (
    <>
    <div className="video-block">
        <video className='video' src='/src/assets/videoplayback.mp4' muted autoPlay loop></video>
    </div>
    <h3 className='text-model-3'>Model 3</h3>
    <p className='text-info'>
    Reengineered from the ground up.<hr></hr>
    Be the first to get behind the wheel. Demo drive now.
    </p>
    <buttom className='block-buttom'>Check Model 3</buttom>
    </>
   ) 
}