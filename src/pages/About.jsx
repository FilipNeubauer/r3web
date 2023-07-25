import React from 'react';
import "../styles.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import neub from "../images/neubauerf.png";
import reh from "../images/rehakj.png";
import logo from "../images/WhiteR3.png";
import Innovation from '../components/cards/Innovation';
import Creativity from '../components/cards/Creativity';
import Excellence from '../components/cards/Excellence';
import { useState, useReducer } from 'react';

function reducer(state, action) {
    if (language) {
        language = false;
    }

    else {
        language = true;
    }

    console.log(reducer)

    return language;
}

const About = () => {

    const [language, dispatch] = useReducer(reducer, false)
    // const [language, setLanguage] = useState(false)
    const [vision, setVision] = useState("We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humaity.")
    const [whatwedo, setWhatwedo] = useState("We offer a comprehensive range of digital services designed to help businesses thrive in the modern age. We deliver innovative solutions tailored to meet the unique needs of our clients.")

    // const language = useSelector((state) => state.counter);
    // const dispatch = useDispatch();
  
    // const handleLanguage = () => {
    //   dispatch({LangChange});
    // };

    const LangChange = () => {
        dispatch();
        translate();
    console.log("LANGCAHNGE")

    }

    const translate = () => {
        if (language) {
            setVision("We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humaity.");
            setWhatwedo("We offer a comprehensive range of digital services designed to help businesses thrive in the modern age. We deliver innovative solutions tailored to meet the unique needs of our clients.");
        } else {
            setVision("Představujeme si svět, který je díky našim technologiím lepší. Prostřednictvím inovací, kreativity a spolupráce, se snažíme dosáhnout průlomu v klíčových oblastech. Naše vize přesahuje technologický pokrok; zahrnuje vytvoření budoucnosti, ve které naše technologie slouží lidstvu.");
            setWhatwedo("Nabízíme komplexní řadu digitálních služeb navržené tak, aby pomohly podnikům prosperovat v v dnešním světě. Poskytujeme inovativní řešení šitá na míru jedinečným potřebám našich klientů.");
        }

    console.log(translate)

        return vision;
      }; 
    


    return (
        <>
        <Navbar current={"about"}/>
        <div className='contentAbout'>
        <div className='vision'>
            <h2 className='h2about'>Our Vision</h2>
        <p> 
         {vision}
        </p>
        <button onClick={LangChange}>lang change</button>
        </div>
        
        <div className='whatWeDo'>
            <h2 className='h2about'>What We Do</h2>
            <p> 
                {whatwedo}
            </p>

            </div>
            <div className='coreValues'>
            <h2>
                <img src={logo} className="h2Logo" alt="R3 technologies"></img>
                   Values
                </h2>
                </div>
                <div className='cards'>
                    <Creativity/>
                    <Innovation/>
                    <Excellence/>
                </div>
                
                <div className='line-container'>
                <hr className='hrLine-about'/>  
                </div>

                <div className='team'>
                    <h2>Our Team</h2>
                    <div className='imgTeam'>
                    <img src={reh} className='member'/>
                    <img src={neub} className='member'/>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
)
}


export default About