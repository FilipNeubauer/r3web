// TranslationContext.js
import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslationContext = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(false);
  
  const [AboutUs_nav, setAboutUs_nav] = useState("About Us");
  const [Lang_nav, setLang_nav] = useState("EN");
  const [Pricing_nav, setPricing_nav] = useState("Pricing");
  const [Services_nav, setServices_nav] = useState("Services");
  const [Contact_nav, setContact_nav] = useState("Contact");
  const [h_vision, setH_vision] = useState("Our Vision");
  const [h_whatwedo, setH_whatwedo] = useState("What We Do");

  const [p_pricing, setP_pricing] = useState(
    "Prices for software development are highly individual, please contact us for the details."
  );
  const [h_services, setH_services] = useState(
    "Our Services"
  );
  const [h_software, setH_software] = useState(
    "Software Development"
  );
  const [h_design, setH_design] = useState(
    "Design"
  );
  const [p_software, setP_software] = useState(
    "Whether you need a robust web application, a scalable mobile app, or a complex enterprise software system, we got you covered."
  );
  const [p_design, setP_design] = useState(
    "Creativity. Minimalism. Effectivity. These are the only words we need to describe what we mean by design. We will help you create the brand of your company, so it will be unforgettable."
  );
  const [digital, setDigital] = useState(
    "Digital Solutions Tailored for You!"
  );
  const [journey, setJourney] = useState(
    "Start Your Journey"
  );
  const [vision, setVision] = useState(
    "We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humanity."
  );
  const [whatwedo, setWhatwedo] = useState(
    "We offer a comprehensive range of digital services designed to help businesses thrive in the modern age. We deliver innovative solutions tailored to meet the unique needs of our clients."
  );
  const [team, setTeam] = useState(
    "Team"
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
  const [ContactUs, setContactUs] = useState(
    "Contact Us"
  );
  const [p_contact, setP_contact] = useState(
    "Did we catch your attention? Do not hesitate and contact us right now!"
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
      setP_pricing(
        "Prices for software development are highly individual, please contact us for the details."
      );
      setH_services(
        "Our Services"
      );
      setP_software(
        "Whether you need a robust web application, a scalable mobile app, or a complex enterprise software system, we got you covered."
      );
      setH_software(
        "Software Development"
      );
      setP_design(
        "Creativity. Minimalism. Effectivity. These are the only words we need to describe what we mean by design. We will help you create the brand of your company, so it will be unforgettable."

      );
      setH_design(
        "Design"
      );
      setContactUs(
        "Contact Us"
      );
      setP_contact(
        "Did we catch your attention? Do not hesitate and contact us right now!"
      );
      setVision(
        "We envision a world transformed by our technological innovations. Through disruptive thinking, and collaboration, we aim to drive breakthroughs in key areas. Our vision extends beyond technological advancements; it encompasses creating a future where innovation serves humanity."
      );
      setDigital(
        "Digital Solutions Tailored for You!"
      );
      setJourney(
        "Start Your Journey"
      );
      setAboutUs_nav(
        "About Us"
      );
      setContact_nav(
        "Contact"
      );
      setPricing_nav(
        "Pricing"
      );
      setLang_nav(
        "EN"
      );
      setServices_nav(
        "Services"
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
      setP_pricing(
        "Ceny za vývoj softwaru jsou vysoce individuální, prosím kontaktujte nás pro detaily."
      );
      setH_services(
        "Naše Služby"
      );
      setP_software(
        "Robustní web, mobilní aplikace nebo celý systém pro Vaší firmu, nic není problém."
      );
      setH_software(
        "Vývoj Softwaru"
      );
      setP_design(
        "Kreativita. Minimalismus. Efektivita. To jsou jediná slova, která potřebujeme k popsání toho, co u nás znamená slovo design. Pomůžeme Vám vytvořit značku Vaší společnosti, tak, aby byla nezapomenutelná."
      );
      setH_design(
        "Design"
      );
      setContactUs(
        "Kontaktujte Nás"
      );
      setP_contact(
        "Zaujali jsme Vás? Neváhejte nás kontaktovat!"
      );
      setVision(
        "Představujeme si svět, který je díky našim technologiím lepší. Prostřednictvím inovací, kreativity a spolupráce, se snažíme dosáhnout průlomu v klíčových oblastech. Naše vize přesahuje technologický pokrok; zahrnuje vytvoření budoucnosti, ve které naše technologie slouží lidstvu."
      );
      setAboutUs_nav(
        "O Nás"
      );
      setContact_nav(
        "Kontakt"
      );
      setPricing_nav(
        "Ceník"
      );
      setLang_nav(
        "CZ"
      );
      setServices_nav(
        "Služby"
      );
      setDigital(
        "Digitální služby na míru pro Vás!"
      );
      setJourney(
        "Zahájit svou cestu!"
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
    <TranslationContext.Provider value={{ language, translate, switchBool, setLanguage, vision, creativity, whatwedo, h_vision, h_creativity, h_whatwedo, team, values, h_excellence, excellence, innovation, h_innovation, Contact_nav, Services_nav, Pricing_nav, Lang_nav, AboutUs_nav, journey, digital, p_contact, ContactUs, p_design, p_software, h_services, h_software, h_design, p_pricing}}>
      {children}
    </TranslationContext.Provider>
  );
};
