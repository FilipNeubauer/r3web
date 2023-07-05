import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import servimg from "../images/services.png"

const Services = () => {
    
    return (
        <>
        <Navbar/>
        <div className='contentServices'>
            <img  src={servimg} className='servicesimg' alt='Services'/>
        </div>

        </>
)
}


export default Services