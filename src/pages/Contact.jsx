import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import neub from "../images/neubContact.png"
import reh from "../images/rehakContact.png"
import Footer from '../components/Footer';
import { useTranslationContext } from '../components/TranslationContext';

const Contact = () => {
    
  const { ContactUs, p_contact } = useTranslationContext();

    return (
        <>
        <Navbar current={"contact"}/>
        <div className='contentContact' style={{"margin-bottom":"30px"}}>
        <div className='cont'>
            <h2 className='hCon'>{ContactUs}</h2>
        
        <p className='pCon'> 
            {p_contact}
        </p>
        {/* Zaujali jsme Vás? Neváhejte nás kontaktovat. */}
        </div>
        <div className='teamCon'>
            <div className='reh'>
            <img src={reh} className='member1'/>
            <a href="mailto:r3rehak@gmail.com" className='cntct'>r3rehak@gmail.com</a>
            <a href="tel:+420777066841" className='cntct'>+420 777 066 841</a>
            </div>

            <div className='neub'>
            <img src={neub} className='member1'/>
            <a href="mailto:r3neubauer@gmail.com" className='cntct'>r3neubauer@gmail.com</a>
            <a href="tel:+420720206668" className='cntct'>+420 720 206 668</a>

            </div>
            </div>
        </div>
        <Footer />
        </>
)
}


export default Contact