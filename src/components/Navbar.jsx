import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"
import miniLogo from "../images/WhiteR3.svg"
import { useState, useEffect } from 'react';


function Navbar(props) {


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

            <li className={props.current == "about" ? "current" : ""}>
              <Link to='/About'>About Us</Link>      
            </li>
            {/* <li>
              <Link to='/Configurator'>Configurator</Link>
            </li> */}
            <li className={props.current == "contact" ? "current" : ""}>
              <Link to='/Contact'>Contact</Link>
            </li>

            <Link to='/'>
              <input className="miniLogo" type="image" src={miniLogo}/>
            </Link>

            <li className={props.current == "pricing" ? "current" : ""}>
              <Link to='/Pricing'>Pricing</Link>
            </li>

            <li className={props.current == "services" ? "current" : ""}>
              <Link to='/Services'>Services</Link>
            </li>
            
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
                <Link to='/About'>About Us</Link>      
              </li>

              <li>
                <Link to='/Contact'>Contact</Link>
              </li>

              <li>
                <Link to='/Pricing'>Pricing</Link>
              </li>

              <li>
                <Link to='/Services'>Services</Link>
              </li>
          </ul>
 
            <div className={`hamburgerContainer ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div> 

        </nav>

    </div>

    <hr/>

    </>
  );
}

export default Navbar;