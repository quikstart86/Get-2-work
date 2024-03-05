import React from 'react'
import { useLocation } from 'react-router-dom';
import './Homepage.css'
//Here I am taking in Options as data for my prop
function index({ }) {

  // const location = useLocation();
  // const Options = location.state?.Options || [];
  // console.log("Location state:", location.state);
  // console.log("Options received:", Options); 


  const Options = JSON.parse(localStorage.getItem("skillsData"));
  console.log(Options)
  return (
    < div >
      <h1>Skills</h1>

      {/* Iam iterating over each element in the options object  checking if the otpion is checked and only if true then rendering the skill*/}
      {Options.map((option) =>
        option.checked &&
        <div class="container overflow-hidden">
          <div class="row justify-content-xl-center gy-3 gy-sm-4">
            <div class="col-12 col-sm-6 col-xl-5">
              <div class="bg-white rounded shadow-sm  p-3 mb-3">
                <div key={option.title}>
                  <h2> {option.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }

    </div >
  )

}


export default index