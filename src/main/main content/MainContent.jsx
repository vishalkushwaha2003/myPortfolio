import React from 'react'
import Navbar from './Navbar'
import About from './About'

function MainContent() {
  return (
    <div clsaa='main-content'>
      <Navbar/>
      <About/>
      {/* <Resume/>
      <Portfolio/>
      <Blog/>
      <Contact/> */}
    </div>
  )
}

export default MainContent
