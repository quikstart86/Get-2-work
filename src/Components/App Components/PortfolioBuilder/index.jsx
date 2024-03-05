import React from 'react'
import './themes.css'
import Home from '../../User Components/Homepage/index'



function index() {

  const localtheme = JSON.parse(localStorage.getItem("themeData"));
  // console.log(localthem)

  return (
    <div >Render
      <Home />
    </div>
    // this will be ware upon the event of the render button on step3 all the components from the user components will be rendered
  )
}

export default index