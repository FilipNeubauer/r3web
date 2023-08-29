import React from 'react';
import "../styles.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import neub from "../images/Neubauer.png";
import reh from "../images/Rehak.png";
import kope from "../images/Kopecky.png";
import bui from "../images/Bui.png";
import logo from "../images/WhiteR3.png";
import Innovation from '../components/cards/Innovation';
import Creativity from '../components/cards/Creativity';
import Excellence from '../components/cards/Excellence';
import { useTranslationContext } from '../components/TranslationContext';

const About = () => {
    const { vision, whatwedo, h_vision, h_whatwedo, values, team } = useTranslationContext();

    
    return (
        <>
        <Navbar current={"about"}/>
        <div className='contentAbout'>
        <div className='vision'>
            <h2 className='h2about'> {h_vision} </h2>
        <p> 
         {vision}
        </p>        
        </div>
        
        <div className='whatWeDo'>
            <h2 className='h2about'> {h_whatwedo} </h2>
            <p> 
                {whatwedo}
            </p>

            </div>
            <div className='coreValues'>
            <h2>
                <img src={logo} className="h2Logo" alt="R3 technologies"></img>
                   {values}
                </h2>
                </div>
                <div className='cards'>
                    <Innovation/>
                    <Creativity/>
                    <Excellence/>
                </div>
                
                <div className='line-container'>
                <hr className='hrLine-about'/>  
                </div>

                <div className='team'>
                    <h2> {team} </h2>
                    <div className='imgTeam'>
                        <img src={reh} className='member'/>
                        <img src={neub} className='member'/>
                        <img src={kope} className='member'/>
                        {/* <img src={bui} className='member'/> */}
                    </div>
                </div>
            </div>
            <Footer/>
            </>
)
}


export default About