import React from 'react';
import "../styles.css";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import colb from "../images/cards/collab.png";
import crea from "../images/cards/creativity.png";
import cus from "../images/cards/customer.png";
import exc from "../images/cards/excellence.png";
import grw from "../images/cards/growth.png";
import inn from "../images/cards/innovation.png";
import spd from "../images/cards/speed.png";
import neub from "../images/neubauerf.png";
import reh from "../images/rehakj.png";
import logo from "../images/WhiteR3.png";


const About = () => {

   
    // const settings = {
    //     dots: true,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 2000,
    //         responsive: [
    //           {
    //             breakpoint: 768,
    //             settings: {
    //               slidesToShow: 2,
    //               slidesToScroll: 1
    //             }
    //           },
    //           {
    //             breakpoint: 480,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1
    //             }
    //           }
    //         ]
    //     };

    // carousel in the future

    return (
        <>
        <Navbar current={"about"}/>
        <div className='contentAbout'>
        <div className='vision'>
            <h2>Our Vision</h2>
        <p> 
        We envision a world transformed by our technological 
        innovations. Through cutting-edge research, 
        disruptive thinking, and collaboration, we aim 
        to drive breakthroughs in key areas such as artificial 
        intelligence, robotics, and sustainable solutions. Our 
        vision extends beyond technological advancements; it 
        encompasses creating a future where innovation serves 
        as a catalyst for positive societal transformation, 
        economic growth, and environmental stewardship.
        </p>
        </div>
        
        <div className='whatWeDo'>
            <h2>What We Do</h2>
        <p> 
            We offer a comprehensive 
            range of digital services 
            designed to help businesses thrive in 
            today's world. With our team of experienced 
            software engineers and cutting-edge 
            technologies, we deliver innovative 
            solutions tailored to meet the 
            unique needs of our clients.
            </p>
            </div>
            <div className='coreValues'>
            <h2>
                <img src={logo} className="h2Logo" alt="R3 technologies"></img>
                   Values
                </h2>
                </div>
                <div className='cards'>
                {/* <Slider {...settings}>
                <div> */}
                    {/* <img src={colb} className='card'/> */}
                {/* </div>
                <div> */}
                    {/* <img src={cus} className='card'/> */}
                {/* </div>
                <div> */}
                    <img src={crea} className='card'/>
                {/* </div>
                <div> */}
                    <img src={exc} className='card'/>
                {/* </div>
                <div> */}
                    {/* <img src={grw} className='card'/> */}
                {/* </div>
                <div> */}
                    <img src={inn} className='card'/>
                {/* </div>
                <div> */}
                    {/* <img src={spd} className='card'/> */}
                {/* </div>
                </Slider> */}     
                </div>
                
                <div className='line-container'>
                <hr className='hrLine-about'/>  
                </div>

                <div className='team'>
                    <h2>Our Team</h2>
                    <div className='imgTeam'>
                    <img src={reh} className='member'/>
                    <img src={neub} className='member'/>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
)
}


export default About