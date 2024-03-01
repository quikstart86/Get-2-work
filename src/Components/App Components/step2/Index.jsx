import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
// import Popper from 'popper.js';
import { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import { IoCaretBackSharp } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Index() {
  const [selectedOption, setSelectedOption] = useState('frontEnd');

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div> <h1 className='text-center pt-3 p-2'> So what kind of developer are you ? </h1>
      <Dropdown className="text-center" select value={selectedOption} onChange={handleChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ justifyContent: "end" }} >
          <Dropdown.Item onClick={() => handleChange('frontEnd')} >Front-End</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('backEnd')} >Back-End</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('fullStack')} >Full-Stack</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h2 className='text-center mt-5 p-5'>What skills do you have ?</h2>

      <div className='text-center'>
        {selectedOption === 'frontEnd' && (
          <div className='frontEnd'>
            <input type="checkbox" ></input>
            <label > CSS</label> <br />
            <input type="checkbox" ></input>
            <label > HTML</label> <br />
            <input type="checkbox" ></input>
            <label> Javascript</label> <br />
          </div>)}

        {selectedOption === 'backEnd' && (
          <div className='backEnd'>
            <input type="checkbox" ></input>
            <label > mySQL</label> <br />
            <input type="checkbox" ></input>
            <label > mongoDb</label> <br />
            <input type="checkbox" ></input>
            <label>Node</label> <br />
          </div>)}

        {selectedOption === 'fullStack' && (
          <div className='fullStack'>
            <input type="checkbox" ></input>
            <label > CSS</label> <br />
            <input type="checkbox" ></input>
            <label > HTML</label> <br />
            <input type="checkbox" ></input>
            <label> Javascript</label> <br />
            <input type="checkbox" ></input>
            <label > mySQL</label> <br />
            <input type="checkbox" ></input>
            <label > mongoDb</label> <br />
            <input type="checkbox" ></input>
            <label>Node</label> <br />
          </div>)}
      </div>
      <div className='position-relative'>
        <Link to={'/Step1'} ><div className='position-absolute bottom-0 start-0'> <IoCaretBackSharp size={50} style={{ color: "black" }} /> </div> </Link>
        <Link to={'/Step3'}><div className='position-absolute bottom-0 end-0'> <IoCaretForward size={50} style={{ color: "black" }} /> </div> </Link>
      </div >
    </div >
  )
}

export default Index;