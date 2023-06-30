import React from 'react';
import "../styles.css"
import { useState, useEffect, useRef } from 'react';
import but from "../images/buttondown1.svg"
import ready from "../images/ready1.png"
import logo from "../images/r3master.png"
import digital from "../images/digitalsolutions.png"
import miniLogo from "../images/r3.png"
import { Link } from 'react-router-dom';


const MainPage = () => {
    const [shifted, setShifted] = useState(false);
    const targetElementRef = useRef(null);


    const targetElementBody = document.getElementsByTagName("body")[0];
    const targetElementHtml = document.getElementsByTagName("html")[0];

    if (shifted) {
      targetElementBody.style.overflowY = "scroll"
      targetElementHtml.style.overflowY = "scroll"
    } else {
      targetElementBody.style.overflowY = "hidden"
      targetElementHtml.style.overflowY = "hidden"
    }
    

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const targetElement = entries[0];
        if (targetElement.isIntersecting) {
          setShifted(true);
          observer.disconnect();
        }
      });
  
      if (targetElementRef.current) {
        observer.observe(targetElementRef.current);
      }
  
      return () => {
        if (targetElementRef.current) {
          observer.unobserve(targetElementRef.current);
        }
      };
    }, []);


    const shiftFoo = () => {
        setShifted(!shifted)
    }


    return (<div className={`backG ${shifted ? "shifted" : ""}`}>
      <div  className='introPage'>
        <img  src={logo} className='logo' alt='Remaster'/>
        <img src={ready} className='ready' alt='ready for tomorrow?'/>
        <input type="image" onClick={shiftFoo} src={but} className='buttonDown svg-image' alt='button down'/>

      </div>

      <div  className='firstPage'>
        <div className='wholeBar'>
          <input type="image" src={miniLogo} onClick={shiftFoo} className='miniLogo'/>
          <nav className='navBar'>
            <ul className='navList'>
              <li>
                <Link to='/About'>About Us</Link>
              </li>
              <li>
                <a href='#'>Configurator</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>Projects</a>
              </li>
            </ul>
          </nav>
        </div>

        <hr ref={targetElementRef}/>



        <div className='contentFirstPage'>

        <img  src={digital} className='digital' alt='Digital Solutions for You'/>

          <button className='startBtn'>
            <label className='startYourJourney'>
            Start Your Journey
            </label>
          </button>

        </div>
      </div>


</div> 
)
}


export default MainPage