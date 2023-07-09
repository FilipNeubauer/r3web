import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import neub from "../images/neubauerf.png"
import reh from "../images/rehakj.png"

const Contact = () => {


      
    
    return (
        <>
        <Navbar/>
        <div className='contentContact'>
        <div className='contact'>
            <h2>Contact Us</h2>
        <p> 
            Did we catch your attention? Do not hesitate and contact us
            right now! 
        </p>
        <div>
            {/* <img src={reh} className='member1'/>
            <img src={neub} className='member1'/> */}
        </div>
        </div>
        </div>
        </>
)
}


export default Contact