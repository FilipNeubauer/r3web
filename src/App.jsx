import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Configurator from './pages/Configurator';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import { TranslationProvider } from './components/TranslationContext';


const App = () => {
    return (
        <TranslationProvider>
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            {/* <Route path="/Configurator" element={<Configurator/>}/> */}
            <Route path="/Pricing" element={<Pricing/>}/>
            {/* <Route path="/Projects" element={<Projects/>}/> */}
            <Route path="/Services" element={<Services/>}/>
        </Routes>
        </TranslationProvider>
)
}

export default App