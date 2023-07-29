// TranslationContext.js
import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslationContext = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(false);
  const [h_vision, setH_vision] = useState(
    "Our Vision"
  );
  const [h_whatwedo, setH_whatwedo] = useState(
    "What We Do"
  );
  const [vision, setVision] = useState(
    "We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humanity."
  );
  const [whatwedo, setWhatwedo] = useState(
    "We offer a comprehensive range of digital services designed to help businesses thrive in the modern age. We deliver innovative solutions tailored to meet the unique needs of our clients."
  );
  const [team, setTeam] = useState(
    "Tesm"
  );
  const [values, setValues] = useState(
    "Values"
  );
  const [creativity, setCreativity] = useState(
    "We encourage out-of-the-box thinking, empowering our team to bring fresh ideas and imaginative approaches to solve challenges."
  );
  const [h_creativity, setH_creativity] = useState(
    "Creativity"
  );
  const [h_excellence, setH_excellence] = useState(
    "Excellance"
  );
  const [excellence, setExcellence] = useState(
    "Our dedication to high-quality services exceeds clients' expectations, motivating us to constantly improve."
    );
  const [h_innovation, setH_inovation] = useState(
    "Innovation"
  );
  const [innovation, setInnovation] = useState(
    "We prioritize continuous learning, creative thinking, and cutting-edge technologies to deliver transformative solutions."
  );


  const switchBool = () => {
    if (language){
      setLanguage(false);
    }
    else {
      setLanguage(true);
    }
  };

  const translate = () => {
    if (language) {
      setVision(
        "We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humanity."
      );
      setWhatwedo(
        "We offer a comprehensive range of digital services designed to help businesses thrive in the modern age. We deliver innovative solutions tailored to meet the unique needs of our clients."
      );
      setH_vision(
        "Our Vision"
      );
      setH_whatwedo(
        "What We Do"
      );
      setTeam(
        "Our Team"
      );
      setH_creativity(
        "Creativity"
      );
      setValues(
        "Values"
      );
      setCreativity(
        "We encourage out-of-the-box thinking, empowering our team to bring fresh ideas and imaginative approaches to solve challenges."
      );
      setExcellence(
        "Our dedication to high-quality services exceeds clients' expectations, motivating us to constantly improve."
      );
      setH_excellence(
        "Excellance"
      );
      setInnovation(
        "We believe that innovation drives society, so we use the latest technology to create a better future."
      );
      setH_inovation(
        "Innovation"
      );

    } 
    else {
      setVision(
        "Představujeme si svět, který je díky našim technologiím lepší. Prostřednictvím inovací, kreativity a spolupráce, se snažíme dosáhnout průlomu v klíčových oblastech. Naše vize přesahuje technologický pokrok; zahrnuje vytvoření budoucnosti, ve které naše technologie slouží lidstvu."
      );
      setExcellence(
        "Naše oddanost vysoce kvalitním službám překračuje očekávání klientů a motivuje nás k neúnavnému zdokonalování."
      );
      setH_creativity(
        "Kreativita"
      );
      setWhatwedo(
        "Nabízíme komplexní řadu digitálních služeb navržené tak, aby pomohly podnikům prosperovat v dnešním světě. Poskytujeme inovativní řešení šitá na míru jedinečným potřebám našich klientů."
      );
      setH_vision(
        "Naše Vize"
      );
      setH_whatwedo(
        "Co Děláme"
      );
      setTeam(
        "Náš Tým"
      );
      setValues(
        "Hodnoty"
      );
      setCreativity(
        "Podporujeme netradiční myšlení a umožňujeme našemu týmu přinášet nové kreativní nápady a přístupy k řešení problémů."
      );
      setH_excellence(
        "Kvalita"
      );
      setInnovation(
        "Věříme, že inovace jsou hybatelem společnosti, proto využíváme nejmodernější technologie, ke tvorbě lepší budoucnosti."
      );
      setH_inovation(
        "Inovace"
      );
    }
  };

  return (
    <TranslationContext.Provider value={{ language, translate, switchBool, setLanguage, vision, creativity, whatwedo, h_vision, h_creativity, h_whatwedo, team, values, h_excellence, excellence, innovation, h_innovation}}>
      {children}
    </TranslationContext.Provider>
  );
};
