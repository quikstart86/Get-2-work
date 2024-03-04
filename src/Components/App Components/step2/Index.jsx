import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';
import './step2.css'; // Import the Step 2 CSS file

function Step2() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showSkills, setShowSkills] = useState(false); // State to control the visibility of the skills section
  const firstName = localStorage.getItem('firstName');

  const handleChange = (value) => {
    setSelectedOption(value);
    setShowSkills(false); // Reset showSkills to false
    // Set showSkills to true after a brief delay
    setTimeout(() => {
      setShowSkills(true);
    }, 100);
  };

  useEffect(() => {
    // Reset showSkills when selectedOption changes
    setShowSkills(false);
  }, [selectedOption]);

  return (
    <div className="step2-container">
      <h2 className='text-center pt-3 p-4'>So, {firstName}, what kind of developer are you?</h2>
      <Dropdown className="text-center" select value={selectedOption} onChange={handleChange}>
        <Dropdown.Toggle variant="gtw" id="dropdown-basic">
          I am a...
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ justifyContent: "end" }}>
          <Dropdown.Item onClick={() => handleChange('frontEnd')}>Front-End Developer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('backEnd')}>Back-End Developer</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('fullStack')}>Full-Stack Developer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Apply the "visible" class conditionally */}
      {selectedOption && (
        <div className={`skill-section ${showSkills ? 'visible' : ''}`}>
          <h2 className='text-center mt-5'>And what skills do you have?</h2>
          <div className='text-center'>
            {selectedOption === 'frontEnd' && (
              <div className='frontEnd'>
                <input type="checkbox"></input>
                <label > CSS</label> <br />
                <input type="checkbox"></input>
                <label > HTML</label> <br />
                <input type="checkbox"></input>
                <label> Javascript</label> <br />
              </div>
            )}
            {selectedOption === 'backEnd' && (
              <div className='backEnd'>
                <input type="checkbox"></input>
                <label > mySQL</label> <br />
                <input type="checkbox"></input>
                <label > mongoDb</label> <br />
                <input type="checkbox"></input>
                <label>Node</label> <br />
              </div>
            )}
            {selectedOption === 'fullStack' && (
              <div className='fullStack'>
                <input type="checkbox"></input>
                <label > CSS</label> <br />
                <input type="checkbox"></input>
                <label > HTML</label> <br />
                <input type="checkbox"></input>
                <label> Javascript</label> <br />
                <input type="checkbox"></input>
                <label > mySQL</label> <br />
                <input type="checkbox"></input>
                <label > mongoDb</label> <br />
                <input type="checkbox"></input>
                <label>Node</label> <br />
              </div>
            )}
          </div>
        </div>
      )}

      <div className='button-container'>
        <Link to={'/Step1'}>
          <Button variant="gtw">Prev</Button>
        </Link>
        <Link to={'/Step3'}>
          <Button variant="gtw">Next</Button>
        </Link>
      </div>
    </div>
  )
}

export default Step2;
