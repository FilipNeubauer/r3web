import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"
import miniLogo from "../images/r3.png"

function Navbar() {
  return (
    <>
    <div className='wholeBar'>
    <Link to='/'>
      <input className="miniLogo" type="image" src={miniLogo}/>
      </Link>
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
            <li>
              <Link to='/Services'>Services</Link>
            </li>
            {/* <li>
              <Link to='/Pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/Projects'>Projects</Link>
            </li> */}
          </ul>
        </nav>

        <button className="hamburger-menu">
          <span ></span>
          <span ></span>
          <span ></span>
        </button>

    </div>

    <hr/>

    </>
  );
}

export default Navbar;