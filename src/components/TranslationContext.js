// TranslationContext.js
import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslationContext = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(false);
  const [vision, setVision] = useState(
    "We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humanity."
  );
  const [whatwedo, setWhatwedo] = useState(
    "We offer a comprehensive range of digital services designed to help businesses thrive in the modern age. We deliver innovative solutions tailored to meet the unique needs of our clients."
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
    } else {
      setVision(
        "Představujeme si svět, který je díky našim technologiím lepší. Prostřednictvím inovací, kreativity a spolupráce, se snažíme dosáhnout průlomu v klíčových oblastech. Naše vize přesahuje technologický pokrok; zahrnuje vytvoření budoucnosti, ve které naše technologie slouží lidstvu."
      );
      setWhatwedo(
        "Nabízíme komplexní řadu digitálních služeb navržené tak, aby pomohly podnikům prosperovat v dnešním světě. Poskytujeme inovativní řešení šitá na míru jedinečným potřebám našich klientů."
      );
    }
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, vision, whatwedo, translate, switchBool }}>
      {children}
    </TranslationContext.Provider>
  );
};
