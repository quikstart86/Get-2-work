import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './Components/App Components/Navbar';
import Homepage from './Components/App Components/Homepage';
import Step1 from './Components/App Components/step1/Index.jsx';
import Step2 from './Components/App Components/step2/Index.jsx';
import Step3 from './Components/App Components/step3/index.jsx';
import Footer from './Components/App Components/Footer';
import PortfolioBuilder from './Components/App Components/PortfolioBuilder';
import Test from './Components/User Components/Homepage/index.jsx'
import HTML from './Components/User Components/Test/index.jsx'


function App() {
  return (
    <>

      <Router>
        {/* Conditionally render the navbar */}
        <Navbar />
        {/* Video background */}
        <video autoPlay loop muted className="video-bg">
          <source src="./src/Images/Background-GP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Routes>
          <Route path="/gen" element={<HTML />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Step1" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
