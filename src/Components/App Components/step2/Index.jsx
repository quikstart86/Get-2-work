import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import Popper from 'popper.js';
import { Dropdown, Button } from 'react-bootstrap';

import { useState } from "react"
import { useEffect } from 'react'
import './step2.css';

import { IoCaretBackSharp } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import { Link, json } from 'react-router-dom';
import Home from "../../User Components/Homepage/index"
import Navbar from '../Navbar';
import Footer from '../Footer';

//creating an array which I can hold all the checkbox options
const AllChecked = ["CSS", "html", "Javascript", "mySQL", "mongoDb", "Node"]


function Step2() {

  // I am using the this to set the state of the selected options as it always starts with frontEnd I set it to frontEnd
  const [selectedOption, setSelectedOption] = useState('');

  //Creating Options array object to hold the checked items
  const [Options, setOptions] = useState([{}])

  //creating an object called checke to set the intiial state of the checkboxes
  const [checked, setChecked] = useState({
    CSS: false,
    html: false,
    Javascript: false
  })
  const FirstName = localStorage.getItem("firstName")

  localStorage.setItem("devType", JSON.stringify(selectedOption))

  const handleChange = (value) => {
    //want to use setoptions
    //want to get the previous array
    //iterate over the array usign .map
    //if condition where the option.title is in one of the options in new array then I want return a copied version of object with checked state=false
    setOptions(prevOptions => (prevOptions.map(option => {
      for (let i = 0; i < AllChecked.length; i++) {
        if (option.title === AllChecked[i]) {
          return { ...option, checked: false }
        }

      }
      //returning the option element of the array when the whole loop has finished  checking the allCheched array
      //this mean that when a user switches from front end to anything else or vice versa the checked state will be swtiched to false
      return option
    })))

    //I am setting the selected value to the value of the dropdown on click which is done later
    setSelectedOption(value);
    setShowSkills(false); // Reset showSkills to false
    // Set showSkills to true after a brief delay
    setTimeout(() => {
      setShowSkills(true);
    }, 100);
  };

  const HandlesetOptions = (ckBox) => {
    setOptions(

      //takes pararameter previous setOptions
      // usuing that use the findIndex method to find where option.title ===cKBox, if there is no such option then findIndex will return -1
      //so if index !==-1 then it means that the option already exists
      // so we want to update the previousSetOptions by creating a new Array object, with the new Option combined
      // then in that index we want to update the checked status
      // if it doesn't exist then we create a new array object and just change the checked status
      previousSetOptions => {
        const index = previousSetOptions.findIndex(option => option.title === ckBox)
        if (index !== -1) {
          const updatedOptions = [...previousSetOptions];
          updatedOptions[index] = { ...updatedOptions[index], checked: !updatedOptions[index].checked }
          return updatedOptions
        } else {
          // const filteredpreviousSetOptions = previousSetOptions.filter(option => option.title && option.checked !== false);
          return [...previousSetOptions, { title: ckBox, checked: (!checked[ckBox]) }]
        }
      })

    // setChecked(previousChecked => ({ ...previousChecked, [ckBox]: !previousChecked[ckBox] }));
  }

  //checking the Options array object as I click through the checkboxes just checking the state
  useEffect(() => {
    console.log(Options);
  }, [Options]);

  // will be using this data for the final render
  localStorage.setItem('skillsData', JSON.stringify(Options));


  return (
    <>
      <Navbar />
      <div className="step2-container">
        <h2 className='gtw-text-center pt-3 p-4'>So {FirstName},  what kind of developer are you?</h2>
        <Dropdown className="gtw-text-center" select value={selectedOption} onChange={handleChange}>
          <Dropdown.Toggle variant="gtw" id="dropdown-basic">
            I am a...
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ justifyContent: "end" }} >
            {/* on click I am setting thhe value of the handleChange to the selectedOption  */}
            <Dropdown.Item onClick={() => handleChange('Front-End')} >Front-End</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange('Back-End')} >Back-End</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChange('Full-Stack')} >Full-Stack</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {selectedOption !== '' && (
          <h2 className='gtw-text-center mt-5 p-5' >What skills do you have ?</h2>
        )}



        {/* here I am giving the child component data thorugh props specifically I am giving it the Options array object */}
        {/* <Home Options={Options} /> */}
        {/* here I have the set of Chekboxes the user gets when they choose the either frontend, backend or fullstack */}

        <div className='gtw-text-center'>
          {selectedOption === 'Front-End' && (
            <div className='frontEnd'>
              <input type="checkbox" onClick={() => { HandlesetOptions("CSS") }}></input>
              <label >CSS</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("html") }}></input>
              <label > HTML</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("Javascript") }} ></input>
              <label> Javascript</label> <br />
            </div>)}

          {selectedOption === 'Back-End' && (
            <div className='backEnd'>
              <input type="checkbox" onClick={() => { HandlesetOptions("mySQL") }} ></input>
              <label > mySQL</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("mongoDb") }} ></input>
              <label > mongoDb</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("Node") }} ></input>
              <label>Node</label> <br />
            </div>)}

          {selectedOption === 'Full-Stack' && (
            <div className='fullStack'>
              <input type="checkbox" onClick={() => HandlesetOptions("CSS")}></input>
              <label > CSS</label> <br />
              <input type="checkbox" onClick={() => HandlesetOptions("html")} ></input>
              <label > HTML</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("Javascript") }} ></input>
              <label> Javascript</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("mySQL") }} ></input>
              <label > mySQL</label>  <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("mongoDb") }}></input>
              <label > mongoDb</label> <br />
              <input type="checkbox" onClick={() => { HandlesetOptions("Node") }}></input>
              <label>Node</label> <br />
            </div>)}
        </div>

        <div className='button-container'>
          <Link to={'/Step1'}>
            <Button variant="gtw">Prev</Button>
          </Link>
          <Link to={'/Step3'}>
            <Button variant="gtw">Next</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Step2;
