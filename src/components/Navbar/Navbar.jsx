import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className='nav-container'>
        <ul className='ul-container'>
          <li><a href='#hero'>Hero</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skill'>Skills</a></li>
          <li><a href='#project'>Projects</a></li>
        </ul>
      </nav>
  )
}

export default Navbar
