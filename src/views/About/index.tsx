import React from 'react'
import { MyFooter, MyHeader } from '../../layout'
import { MyAbout } from '../../components'
import './about.css'

const About = () => {
  return (
        <div className="About-Container">
            <MyHeader/>
            <MyAbout/>
            <MyFooter/>
        </div>
  )
}

export default About
