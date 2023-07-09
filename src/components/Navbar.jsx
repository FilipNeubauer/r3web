import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"
import miniLogo from "../images/r3.png"
import { useState } from 'react';


function Navbar() {

  // if on mobile
  const [hamburger, setHamburger] = useState(true)

  // open or not
  const [open, setOpen] = useState(false)




  return (
    <>
    <div className='wholeBar'>
      <nav className='navBar'>
          <ul className='navList'>

            <li>
              <Link to='/About'>About Us</Link>      
            </li>
            {/* <li>
              <Link to='/Configurator'>Configurator</Link>
            </li> */}
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>

            <Link to='/'>
              <input className="miniLogo" type="image" src={miniLogo}/>
            </Link>

            <li>
              <Link to='/Pricing'>Pricing</Link>
            </li>

            <li>
              <Link to='/Services'>Services</Link>
            </li>
            
            {/* <li>
              <Link to='/Projects'>Projects</Link>
            </li> */}
          </ul>



          {/* hamburger navbar */}
          <ul className='hamburgerNavList'>
            <li>
                <Link to='/About'>About Us</Link>      
              </li>

              <li>
                <Link to='/Contact'>Contact</Link>
              </li>

              <Link to='/'>
                <input className="miniLogo" type="image" src={miniLogo}/>
              </Link>

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