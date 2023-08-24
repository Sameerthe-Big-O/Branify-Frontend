import React from "react";
import './faceRecongnition.css'
const ImageRecognition = ({ box, urlImage }) => {
    return (
        <>
            <div className="center ma">
                <div className="absolute mt2">
                    <img id="image" src={urlImage} alt='' width='400px' height='auto' />
                    <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                </div>
            </div>
        </>
    )

}

export default ImageRecognition;