import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.jpg"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
   <header>
    <div className="container haeder__container">
      <h5>Hello I'm</h5>
      <h1>Ömer Faruk YOLU</h1>
      <h5 className="text-light">FrontEnd Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={ME} alt="me" id='img-me' />
      </div>

      <a href="#contact" className='scroll__down'>Scrool Down</a>
    </div>
   </header>
  )
}

export default Header