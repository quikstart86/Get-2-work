import React from 'react'
import './themes.css'




function index() {

  const localtheme = JSON.parse(localStorage.getItem("themeData"));
  console.log(localtheme)

  return (
    <div className={localtheme}>Render
    </div>
    // this will be ware upon the event of the render button on step3 all the components from the user components will be rendered
  )
}

export default index