
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/App Components/Navbar';
import Homepage from './components/App Components/Homepage';
import Step1 from './components/App Components/step1/Index.jsx';
import Step2 from './components/App Components/step2/Index.jsx';
import Step3 from "./components/App Components/step3/index.jsx";
import Footer from './components/App Components/Footer';
import PortfolioBuilder from './components/App Components/PortfolioBuilder';


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Step1" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />
        </Routes>
        <Navbar />
      </Router>
      <Footer />
    </>
  )
}

export default App;
