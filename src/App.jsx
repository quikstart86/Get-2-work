
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'

import Navbar from './Components/App Components/Navbar'
import Homepage from './Components/App Components/Homepage'
import Step1 from './Components/App Components/step1/Index'
import Step2 from './Components/App Components/step2/index'
import Step3 from './Components/App Components/step3/index'
import Footer from './Components/App Components/Footer'
import PortfolioBuilder from './Components/App Components/PortfolioBuilder'


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

export default App
