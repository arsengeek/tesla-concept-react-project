import './CSSFiles/Model_Y_Section.css'

export default function Model_Y_Section() {
    return (
        <>
            <div className="Model-Y">
                <h3 className='text-Model_Y'>Model Y</h3>
                <h3 className='text-info-Y'>From $36,490</h3>
                <h3 className='text-more-Y'>After Federal Tax Credit</h3>
                {/* <img className='image-Model-Y' src='/src/assets/tesla-modely.png'></img> */}
                <button className='shop-available-button'>Shop Available</button>
                <button className='demo-drive-button'>Demo Drive</button>
            </div>
        </>
    )
} 