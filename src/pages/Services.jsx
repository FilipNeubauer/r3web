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
            <div className="software-dvelopment">
            <h2>Software Development</h2>
            <p className='sd-text'>Whether you need a robust web application, a scalable 
mobile app, or a complex enterprise 
software system, we got you covered.
            </p>
            </div>

            <div className="design">
            <h2>Design</h2>
            <p className='design-text'>Creativity. Minimalism. Effectivity.
These are the only words we need to describe 
what we mean by graphical design. Logo, user 
interface of your app, or a poster, everything 
will look exceptionally good.
            </p>
            </div>
        </div>

        </div>
        <Footer />
        </div>
)
}


export default Services