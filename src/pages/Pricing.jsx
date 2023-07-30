import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useTranslationContext } from '../components/TranslationContext';

const Pricing = () => {
    const navigate = useNavigate()
    const { Contact_nav, p_pricing } = useTranslationContext();


    const handleClick = () => {
      navigate('/Contact');
    };
    
    return (
        <>
        <Navbar current={"pricing"}/>
        <div className='contentContact'>
        <p className='pPrices'>{p_pricing}</p>
        <button onClick={handleClick} className='pricingBtn'>
            {Contact_nav}
        </button>
        </div>
        <Footer/>
        </>
)
}


export default Pricing