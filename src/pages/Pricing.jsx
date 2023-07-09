import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Pricing = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/Contact');
    };
    
    return (
        <>
        <Navbar current={"pricing"}/>
        <div className='contentContact'>
        <p className='pPrices'>Prices for software development are highly individual, please contact us for the details.</p>
        <button onClick={handleClick} className='pricingBtn'>
          <label className='startYourJourney'>
            Contact
            </label>
        </button>
        </div>
        <Footer bot={true}/>
        </>
)
}


export default Pricing