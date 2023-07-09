import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className={props.bot ? "bot" : ""}>
    <hr />
      <div className="footer-container">
        {/* <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 R3MASTER. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;