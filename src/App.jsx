
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'

import Navbar from './Components/App Components/Navbar'
import Homepage from './Components/App Components/Homepage'
import Step1 from './Components/App Components/step1/Index'
import Step2 from './Components/App Components/step2/Index'
import Step3 from './Components/App Components/step3/index'
import Footer from './Components/App Components/Footer'
import Render from './Components/App Components/Render'


function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Step1" element={<Step1 />} />
          <Route path="/Step2" element={<Step2 />} />
          <Route path="/Step3" element={<Step3 />} />
          <Route path="/Render" element={<Render />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
