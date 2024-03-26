import './BackVideo.css'

export default function BackVideo() {
   return (
    <>
    <div className="video-block">
        <video className='video' src='src/assets/videoplayback.mp4' autoPlay ></video>
    </div>
    </>
   ) 
}