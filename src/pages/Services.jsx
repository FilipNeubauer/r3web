import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import servimg from "../images/services.png"
import Footer from '../components/Footer';
import { useTranslationContext } from '../components/TranslationContext';

const Services = () => {

  const { h_software, h_design, p_software, p_design, h_services } = useTranslationContext();
    
    return (
        <div className='servicesContainer'>
        <Navbar current={"services"}/>
        <div className='contentServices'>
            {/* <img  src={servimg} className='servicesimg' alt='Services'/> */}

        <div className="services-layer">
            <h1 className='h1services'>{h_services}</h1>
            <div className="software-dvelopment">
            <h2>{h_software}</h2>
            <p className='sd-text'>
                {p_software}
            </p>
            
            </div>

            <div className="design">
            <h2>{h_design}</h2>
            <p className='design-text'>
                {p_design}
            </p>

            </div>
        </div>

        </div>
        <Footer />
        </div>
)
}


export default Services