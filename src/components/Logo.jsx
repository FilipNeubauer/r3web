import React from 'react';
import "../styles.css"
import logo from "../images/r3master.png"
import but from "../images/buttondown1.svg"

const Logo = () => {
    return (<div className='logoContainer'>
        <img src={logo} className='logo fadeInSlideLogo'/>
        <input type="image" src={but} className='buttonDown fadeInSlideButton svg-image'/>
    </div>)
}

export default Logo