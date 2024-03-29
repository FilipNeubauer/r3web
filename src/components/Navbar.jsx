import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"
import miniLogo from "../images/WhiteR3.png"
import { useState, useEffect } from 'react';
import { useTranslationContext } from './TranslationContext';


function Navbar(props) {

  const { translate, switchBool, AboutUs_nav, Lang_nav, Services_nav, Pricing_nav, Contact_nav } = useTranslationContext();


  const toggleLanguage = () => {
    switchBool();
    translate();
  };

  // open or not
  const [open, setOpen] = useState(false)

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
    <div className='wholeBar'>
      <nav className='navBar'>
          <ul className='navList'>

          <button className='togglelang' onClick={toggleLanguage}>{Lang_nav}</button>

            <li className={props.current == "about" ? "current" : ""}>
              <Link to='/About'>{AboutUs_nav}</Link>      
            </li>
            {/* <li>
              <Link to='/Configurator'>Configurator</Link>
            </li> */}
            <li className={props.current == "contact" ? "current" : ""}>
              <Link to='/Contact'>{Contact_nav}</Link>
            </li>

            <Link to='/'>
              <input className="miniLogo" type="image" src={miniLogo}/>
            </Link>

            <li className={props.current == "pricing" ? "current" : ""}>
              <Link to='/Pricing'>{Pricing_nav}</Link>
            </li>

            <li className={props.current == "services" ? "current" : ""}>
              <Link to='/Services'>{Services_nav}</Link>
            </li>

        <button className='togglelang' onClick={toggleLanguage}>{Lang_nav}</button>

            
            {/* <li>
              <Link to='/Projects'>Projects</Link>
            </li> */}
          </ul>


          <Link to='/' className={`logoHamburger ${open ? 'open' : ''}`}>
              <input className="miniLogoHamburger" type="image" src={miniLogo}/>
          </Link>


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
 
            <div className={`hamburgerContainer ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div> 

        </nav>

    </div>

    <hr className='hrLine'/>

    </>
  );
}

export default Navbar;