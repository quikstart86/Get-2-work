import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
// import Popper from 'popper.js';
import { useState } from "react"
import { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { IoCaretBackSharp } from "react-icons/io5";
import { IoCaretForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Home from "../../User Components/Homepage/index"

//creating an array which I can hold all the checkbox options 
const AllChecked = ["CSS", "html", "Javascript"]


function Index() {

  // I am using the this to set the state of the selected options as it always starts with frontEnd I set it to frontEnd
  const [selectedOption, setSelectedOption] = useState('frontEnd');

  //Creating Options array object to hold the checked items 
  const [Options, setOptions] = useState([{}])

  //creating an object called checke to set the intiial state of the checkboxes
  const [checked, setChecked] = useState({
    CSS: false,
    html: false,
    Javascript: false
  })


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

  localStorage.setItem('userData', JSON.stringify(Options));


  return (
    <div> <h1 className='text-center pt-3 p-2'> So what kind of developer are you ? </h1>
      <Dropdown className="text-center" select value={selectedOption} onChange={handleChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ justifyContent: "end" }} >
          {/* on click I am setting thhe value of the handleChange to the selectedOption  */}
          <Dropdown.Item onClick={() => handleChange('frontEnd')} >Front-End</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('backEnd')} >Back-End</Dropdown.Item>
          <Dropdown.Item onClick={() => handleChange('fullStack')} >Full-Stack</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <h2 className='text-center mt-5 p-5'>What skills do you have ?</h2>

      {/* here I am giving the child component data thorugh props specifically I am giving it the Options array object */}
      {/* <Home Options={Options} /> */}
      {/* using link to passtate to the userComponent homepage  */}
      <Link to="/test" state={{ Options: Options }}>Preview</Link>


      {/* here I have the set of Chekboxes the user gets when they choose the either frontend, backend or fullstack */}

      <div className='text-center'>
        {selectedOption === 'frontEnd' && (
          <div className='frontEnd'>
            <input type="checkbox" onClick={() => { HandlesetOptions("CSS") }}></input>
            <label >CSS</label> <br />
            <input type="checkbox" onClick={() => { HandlesetOptions("html") }}></input>
            <label > HTML</label> <br />
            <input type="checkbox" onClick={() => { HandlesetOptions("Javascript") }} ></input>
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
            <input type="checkbox" onClick={() => HandlesetOptions("CSS")}></input>
            <label > CSS</label> <br />
            <input type="checkbox" onClick={() => HandlesetOptions("HTML")} ></input>
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