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

    <hr/>

    </>
  );
}

export default Navbar;