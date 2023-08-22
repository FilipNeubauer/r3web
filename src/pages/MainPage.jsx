import React from 'react';
import "../styles.css"
import { useState, useEffect, useRef } from 'react';
import but from "../images/buttondown1.svg"
import ready from "../images/ready.svg"
import logo from "../images/WhiteR3.svg"
import digital from "../images/digitalsolutions.png"
import { Link, useNavigate } from 'react-router-dom';
import miniLogo from "../images/WhiteR3.png"
import Footer from '../components/Footer';
import { useTranslationContext } from '../components/TranslationContext';

const MainPage = () => {
  // open or not
  const [open, setOpen] = useState(false)


  const { switchBool, translate, digital, journey, AboutUs_nav, Lang_nav, Services_nav, Pricing_nav, Contact_nav } = useTranslationContext();

  const toggleLanguage = () => {
    switchBool();
    translate();
  };

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

    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/Contact');
    };

    // auto close menu
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setOpen(false);
        } 
      };
  
      // Add event listener for resize
      window.addEventListener('resize', handleResize);
  
      // Initial check on component mount
      handleResize();
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return (
    <>
    <div className={`backG ${shifted ? "shifted" : ""}`}>
    <div  className='introPage'>
      <img  src={logo} className='logo' alt='Remaster'/>
      <img src={ready} className='ready' alt='ready for tomorrow?'/>
      <input type="image" onClick={shiftFoo} src={but} className='buttonDown svg-image' alt='button down'/>

    </div>

    <div  className='firstPage'>
      <div className='wholeBar'>
        <nav className='navBar'>
          <ul className='navList'>
          <button className='togglelang' onClick={toggleLanguage}>{Lang_nav}</button>
            <li>
              <Link to='/About'>{AboutUs_nav}</Link>
            </li>
            {/* <li>
              <Link to='/Configurator'>Configurator</Link>
            </li> */}
            <li>
              <Link to='/Contact'>{Contact_nav}</Link>
            </li>

            <Link>
              <input type="image" src={miniLogo} onClick={shiftFoo} className='miniLogo'/>
            </Link>
            
            <li>
              <Link to='/Pricing'>{Pricing_nav}</Link>
            </li>
            <li>
              <Link to='/Services'>{Services_nav}</Link>
            </li>
           
            <button className='togglelang' onClick={toggleLanguage}>{Lang_nav}</button>
          </ul>


{shifted &&          
          <Link to='/' className={`logoHamburger ${open? 'open' : ''}`}>
              <input className="miniLogoHamburger" type="image" src={miniLogo} onClick={shiftFoo}/>
          </Link>}


          {/* hamburger navbar */}
          <ul className={`hamburgerNavList ${open ? "open" : ""}`}>
            <li>
                <Link to='/About'>{AboutUs_nav}</Link>      
              </li>

              <li>
                <Link to='/Contact'>{Contact_nav}</Link>
              </li>

              <li>
                <Link to='/Pricing'>{Pricing_nav}</Link>
              </li>

              <li>
                <Link to='/Services'>{Services_nav}</Link>
              </li>
            <button className='togglelang' onClick={toggleLanguage}>{Lang_nav}</button>

          </ul>
 
{shifted&& <div className={`hamburgerContainer ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div> }


        </nav>
      </div>

      <hr className='hrLine' ref={targetElementRef}/>



      <div className='contentFirstPage'>

      
        <div className="digital-container">
          <h3>{digital}</h3>
        </div>
 
      {/* <img src={milkyway} className="milkyway" alt="Digital Solutions for You" /> */}

    

        <button onClick={handleClick} className='startBtn'>
          {journey}
        </button>

      </div>
    </div>


</div> 
</>
)
}


export default MainPage