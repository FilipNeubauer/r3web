import React from 'react';
import "../styles.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import neub from "../images/neubauerf.png";
import reh from "../images/rehakj.png";
import logo from "../images/WhiteR3.png";
import Innovation from '../components/cards/Innovation';
import Creativity from '../components/cards/Creativity';
import Excellence from '../components/cards/Excellence';
import { useTranslationContext } from '../components/TranslationContext';

const About = () => {
  const { vision, whatwedo, translate, switchBool } = useTranslationContext();

  const toggleLanguage = () => {
    switchBool();
    translate();
  };
    return (
        <>
        <Navbar current={"about"}/>
        <div className='contentAbout'>
        <div className='vision'>
            <h2 className='h2about'>Our Vision</h2>
        <p> 
         {vision}
        </p>
        <button onClick={toggleLanguage}>Toggle LAng</button>
        
        </div>
        
        <div className='whatWeDo'>
            <h2 className='h2about'>What We Do</h2>
            <p> 
                {whatwedo}
            </p>

            </div>
            <div className='coreValues'>
            <h2>
                <img src={logo} className="h2Logo" alt="R3 technologies"></img>
                   Values
                </h2>
                </div>
                <div className='cards'>
                    <Creativity/>
                    <Innovation/>
                    <Excellence/>
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