import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css'
import logo from './11425269801641100493-128.png';
const Logo = () => {
    return (
        <>

            <Tilt tiltAngleXInitial={30} tiltAngleYInitial={30} className="Tilt br2 shadow-2" style={{
                height: '100px', width: '100px', margin: '40px'
            }}>
                <div style={{}}>
                    <img src={logo} alt="logo"></img>
                </div>
            </Tilt>
        </>

    )

}


export default Logo;