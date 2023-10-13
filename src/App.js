import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Projects from './components/Projects/Projects'
import EmptyPage from './components/Empty/Empty-page'


const App = () => {
  const { ref: heroRef, inView: heroIsVisible} = useInView();
  const { ref: herodivRef, inView: heroDivIsVisible} = useInView();
  const { ref: aboutRef, inView: aboutIsVisible} = useInView();
  const { ref: aboutdivRef, inView: aboutDivIsVisible} = useInView();
  const { ref: skillRef, inView: skillIsVisible} = useInView();
  const { ref: skilldivRef, inView: skillDivIsVisible} = useInView();
  const { ref: projectRef, inView: projectIsVisible} = useInView();
  const { ref: projectdivRef, inView: projectDivIsVisible} = useInView();
  const { ref: rocketRef, inView: rocketIsVisible} = useInView();

  return ( 
    <div>
        <Navbar />
        <div ref={herodivRef}>
          {heroDivIsVisible? <Hero heroRef={heroRef}/> : <EmptyPage />}
        </div>
        <div ref={aboutdivRef}>
          {aboutDivIsVisible? <About aboutRef={aboutRef} rocketRef={rocketRef} rocketisVisible={rocketIsVisible}/> : <EmptyPage />}
        </div>
        <div ref={skilldivRef}>
          {skillDivIsVisible? <Skill skillRef={skillRef}/> : <EmptyPage />}
        </div>
        <div ref={projectdivRef}>
          {projectDivIsVisible? <Projects projectsRef={projectRef}/> : <EmptyPage />}
        </div>
    </div>
  )
}

export default App
