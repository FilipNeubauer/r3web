import React from 'react';
import "../styles.css"
import { useState } from 'react';
import but from "../images/buttondown1.svg"
import ready from "../images/ready1.png"
import logo from "../images/r3master.png"


const App = () => {
    const [shifted, setShifted] = useState(false);

    const shiftFoo = () => {
        const targetElementBody = document.getElementsByTagName("body")[0];
        const targetElementHtml = document.getElementsByTagName("html")[0];

        targetElementBody.style.overflowY = "scroll";
        targetElementHtml.style.overflowY = "scroll";

        setShifted(!shifted)
    }


    return (<div className={`backG ${shifted ? "shifted" : ""}`}>
      <div className='introPage'>
        <img src={logo} className='logo' alt='Remaster'/>
        <img src={ready} className='ready' alt='ready for tomorrow?'/>
        <input type="image" onClick={shiftFoo} src={but} className='buttonDown svg-image' alt='button down'/>

      </div>


</div> )
}

export default App