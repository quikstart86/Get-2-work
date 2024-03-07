import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/App Components/Homepage';
import Step1 from './Components/App Components/step1/Index.jsx';
import Step2 from './Components/App Components/step2/Index.jsx';
import Step3 from './Components/App Components/step3/index.jsx';
import PortfolioBuilder from './Components/App Components/PortfolioBuilder';
import BGvideo from '/public/assets/Images/Background-GP.mp4'




function App() {
  return (
    <>
      <Router>
        {/* Video background */}
        <div className="video-bg">
          <video autoPlay loop muted className="video-bg" key="video-bg">
            <source src={BGvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/Step1" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;