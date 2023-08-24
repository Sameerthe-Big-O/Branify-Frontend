import React from "react";

const Navigation = ({ onRouteChange, isLoggedIn }) => {
    ; return (

        isLoggedIn === 'true' ? <>
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">
                    signOut
                </p>
            </nav>
        </> : <>
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin', 'true')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register', 'true')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        </>


    )

}


export default Navigation;