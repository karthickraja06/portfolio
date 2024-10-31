import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to = "/">
        <div className="logo">
            <p className='k'>K</p>
            <p className="karthick">KARTHICK PORTFOLIO</p>
        </div>
      </Link>
        <ul className='navigation'>
            <Link to = "/" >Home</Link>
            <a href="#">WORKS</a>
            <a href="#">RESUME</a>
            <a href="#">BLOG</a>
        </ul>
        
        <div className="contact-container">
            <button className='contactme'>Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar