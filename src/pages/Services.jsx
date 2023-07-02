import React from 'react';
import "../styles.css"
import Navbar from '../components/Navbar';
import servimg from "../images/services.png"

const Services = () => {
    
    return (
        <div>
        <Navbar/>
        <div className='contentServices'>
            <h1>OUR SERVICES</h1>
            <div className='pservices'>
            <p> We offer a comprehensive 
            range of software engineering, design 
            and data abalytic services 
            designed to help businesses thrive in the 
            digital age. With our team of experienced 
            software engineers and cutting-edge 
            technologies, we deliver innovative 
            solutions tailored to meet the 
            unique needs of our clients.
            </p>
            </div>
            <img  src={servimg} className='servicesimg' alt='Services'/>
        </div>

        </div>
)
}


export default Services