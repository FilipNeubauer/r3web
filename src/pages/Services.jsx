import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import servimg from "../images/services.png"
import Footer from '../components/Footer';

const Services = () => {


    
    return (
        <div className='servicesContainer'>
        <Navbar current={"services"}/>
        <div className='contentServices'>
            {/* <img  src={servimg} className='servicesimg' alt='Services'/> */}

        <div className="services-layer">
            <h1 className='h1services'>Our Services</h1>
            <div className="software-dvelopment">
            <h2>Software Development</h2>
            <p className='sd-text'>Whether you need a robust web application, a scalable 
mobile app, or a complex enterprise 
software system, we got you covered.
            </p>
            {/* Robustní web, mobilní 
            aplikace nebo celý systém pro Váš podnik, nic není problém. */}
            </div>

            <div className="design">
            <h2>Design</h2>
            <p className='design-text'>Creativity. Minimalism. Effectivity.
These are the only words we need to describe 
what we mean by design.<br/> We will help you create the brand of your
company, so it will be unforgettable.
            </p>

{/* Kreativita. Minimalismus. Efektivita. To jsou jediná slova, která
potřebujeme k popsání toho, co u nás znamená slovo design.<br/> Pomůžeme Vám
vytvořit značku Vaší společnosti, tak, aby byla nezapomenutelná. */}

            </div>
        </div>

        </div>
        <Footer />
        </div>
)
}


export default Services