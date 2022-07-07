import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/omerfarukyolu/"><BsLinkedin/></a>
        <a href="https://github.com/OMRFRKYL"><BsGithub/></a>
        <a href="https://www.instagram.com/ofarukyolu/"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials