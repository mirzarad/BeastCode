import React from 'react'
import ParticlesBg from 'particles-bg'
import menuHoverTick from '../../util/sound/menu-hover-tick.mp3'
import './navbar.css'

const Navbar = () => {

  const onMenuItemHover = () => {
    const hoverAudio = new Audio();
    hoverAudio.src = menuHoverTick
    hoverAudio.play()
  }

  return (
    <nav>
      <div className="navbar">
      <ParticlesBg color="#5159EE" type="cobweb" bg={true} />
        <div>
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
            <div className="logo">
              BeastCode
            </div>
            <div className="menu-items">
              <li><a href="#" onMouseEnter={onMenuItemHover}>Home</a></li>
              <li><a href="#" onMouseEnter={onMenuItemHover}>About</a></li>
              <li><a href="#" onMouseEnter={onMenuItemHover}>Algorithms</a></li>
              <li><a href="#" onMouseEnter={onMenuItemHover}>Blog</a></li>
              <li><a href="#" onMouseEnter={onMenuItemHover}>Portfolio</a></li>
              <li><a href="#" onMouseEnter={onMenuItemHover}>Contact</a></li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar