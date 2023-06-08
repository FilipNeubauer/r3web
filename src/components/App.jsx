import React from 'react';
import "../styles.css"
import { useState, useEffect, useRef } from 'react';
import but from "../images/buttondown1.svg"
import ready from "../images/ready1.png"
import logo from "../images/r3master.png"
import miniLogo from "../images/r3.png"
import r3master_p from "../images/r3master_p.png"


const App = () => {
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
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>References</a>
              </li>
            </ul>
          </nav>
        </div>

        <hr ref={targetElementRef}/>



        <div className='contentFirstPage'>
          <div className='block centerBlock'>
            <h2>OUR SERVICES</h2>
            <p>At <img src={r3master_p} alt="R3MASTER"/>, we offer a comprehensive 
range of software engineering services 
designed to help businesses thrive in the 
digital age. With our team of experienced 
software engineers and cutting-edge 
technologies, we deliver innovative 
solutions tailored to meet the 
unique needs of our clients.</p>
          </div>

        <div className='block leftBlock'>
            <h2>Custom Software Development</h2>
            <p>We specialize in developing custom 
software solutions that align perfectly 
with your business goals. Whether you 
need a robust web application, a scalable 
mobile app, or a complex enterprise 
software system, our talented engineers 
will collaborate closely with you to 
understand your requirements and 
deliver a tailored solution that exceeds 
your expectations.</p>
          </div>

          <div className='block rightBlock'>
            <h2>Software Consulting and Architecture</h2>
            <p>At <img src={r3master_p} alt="R3MASTER"/>Navigating the ever-evolving landscape 
of software technologies can be 
challenging. Our team of seasoned software 
consultants is here to provide expert 
guidance and assist you in making informed 
decisions. We help you define your software 
architecture, select the right technologies, 
and create a solid foundation for your 
digital initiatives.</p>
          </div>


          <div className='block leftBlock'>
            <h2>Quality Assurance and Testing</h2>
            <p>At <img src={r3master_p} alt="R3MASTER"/>Ensuring the reliability, functionality, and 
performance of your software is crucial. 
Our dedicated quality assurance and testing 
team meticulously evaluates every aspect of 
your software to identify and resolve any 
issues before deployment. We follow industry 
best practices and utilize advanced testing 
methodologies to deliver software solutions 
of the highest quality.</p>
          </div>


          <div className='block rightBlock'>
            <h2>Software Maintenance and Support</h2>
            <p>We understand that software solutions require continuous maintenance and support to stay efficient and secure. Our team offers ongoing maintenance services, 
including bug fixes, security updates, and system enhancements. We provide reliable support, promptly addressing any technical issues and ensuring smooth operation and optimal performance of your software.</p>
          </div>

          <div className='block leftBlock'>
            <h2>Agile Development and Project Management</h2>
            <p>We embrace Agile development methodologies to deliver software projects with flexibility, transparency, and efficiency. Our experienced project managers collaborate closely with you, ensuring effective communication, 
streamlined processes, and on-time delivery. We prioritize your business objectives, adapt to changing requirements, and foster collaboration throughout the development lifecycle.</p>
          </div>


      </div>
      </div>


</div> )
}

export default App