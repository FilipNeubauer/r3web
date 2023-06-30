import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import About from './components/About';

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
)
}

export default App