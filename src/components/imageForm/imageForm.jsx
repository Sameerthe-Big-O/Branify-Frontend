import React from "react";
import './image.css';
const ImageForm = ({ onInPutChange, onSubmit }) => {
    return (
        <>
            <div>
                <p className="f3">
                    {'Want to see the magic paste the url and this will detect the faces in it'}
                </p>
            </div>
            <div className="center">
                <div className="form center pa4 br3 shadow">
                    <input className="f4 pa2 w-50 center" type="text" placeholder="paste the link here" onChange={onInPutChange} />
                    <button className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </>
    )

}

export default ImageForm;