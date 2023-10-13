import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='nav'>
        <ul className='ul-container'>
          <li><a href='#hero'>Hero</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skill'>Skills</a></li>
          <li><a href='#project'>Projects</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
