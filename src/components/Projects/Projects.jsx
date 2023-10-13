import React from 'react'
import './Project.css' 

import lamp from '../../img/lamp.png'
import light from '../../img/light.png'
import coder from '../../img/coder.gif'
import Carousel from './Carousel'

const Projects = ({ projectsRef }) => {
  return (
    <section className='container4' id='project' ref={projectsRef}>
      <div className='slider'>
        <Carousel />
      </div>
      <div className="ghost-div"></div>
      <div className='div2'>
        <ul>
          <li className='my'>My</li>
          <li className='project'>Projects</li>
        </ul>
      </div>
      <div className='lamp-container'>
        <img src={lamp} className='lamp' alt='Lamp img' />
        <img src={light} className='light' alt='Light img' />
        <img src={coder} className='coder' alt='Coder img'/>
      </div>
    </section>
  )
}

export default Projects
