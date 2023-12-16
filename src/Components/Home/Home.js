import React from 'react'
import classes from './Home.module.css'
import AboutMe from './AboutMe/AboutMe'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import POR from './POR/POR'
import {Helmet} from "react-helmet";
import { useSelector } from 'react-redux'
import Certification from './Certification/Certification'
const Home = () => {
  const filter = useSelector((state) => state.filterSlice.filter);
  return (
    <div className={classes.wholePage}>
        <Helmet>
          <title>{filter ? 'FILTERED ME': 'UNFILTERED ME'}</title>
        </Helmet>
        <AboutMe id='About'/>
        <Education id='Education' />
        <Experience id='Experience'/>
        <Skills id='Skills' />
        <Certification id='Certification' />
        <Projects id='Projects'/>
        <POR id='POR'/>
    </div>
  )
}

export default Home
