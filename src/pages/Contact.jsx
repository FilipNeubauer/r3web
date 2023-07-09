import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import neub from "../images/neubContact.png"
import reh from "../images/rehakContact.png"
import Footer from '../components/Footer';

const Contact = () => {


      
    
    return (
        <>
        <Navbar current={"contact"}/>
        <div className='contentContact'>
        <div className='cont'>
            <h2 className='hCon'>Contact Us</h2>
        
        <p className='pCon'> 
            Did we catch your attention? Do not hesitate and contact us
            right now! 
        </p>
        </div>
        <div className='teamCon'>
            <div className='reh'>
            <img src={reh} className='member1'/>
            <a href="mailto:rehakj03@seznam.cz" className='cntct'>rehakj03@seznam.cz</a>
            <a href="tel:+420777066841" className='cntct'>+420 777 066 841</a>
            </div>

            <div className='neub'>
            <img src={neub} className='member1'/>
            <a href="mailto:filipneub@seznam.cz" className='cntct'>filipneub@seznam.cz</a>
            <a href="tel:+420720206668" className='cntct'>+420 720 206 668</a>

            </div>
            </div>
        </div>

        <Footer />
        </>
)
}


export default Contact