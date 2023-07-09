import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import servimg from "../images/services.png"
import Footer from '../components/Footer';

const Services = () => {


    
    return (
        <>
        <Navbar current={"services"}/>
        <div className='contentServices'>
            <img  src={servimg} className='servicesimg' alt='Services'/>
        </div>
        <Footer />
        </>
)
}


export default Services