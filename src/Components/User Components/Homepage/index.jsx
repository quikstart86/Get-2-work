import React from 'react'
import { useLocation } from 'react-router-dom';

//Here I am taking in Options as data for my prop
function index({ }) {

  const location = useLocation();
  const Options = location.state?.Options || [];
  console.log("Location state:", location.state);
  console.log("Options received:", Options);

  return (
    < div >
      <h1>Skills</h1>

      {/* Iam iterating over each element in the options object  checking if the otpion is checked and only if true then rendering the skill*/}
      {Options.map((option) =>
        option.checked &&
        <div key={option.title}>
          <h2> {option.title}</h2>

        </div>)
      }
    </div >
  )

}


export default index