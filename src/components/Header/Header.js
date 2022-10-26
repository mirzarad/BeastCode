import React from 'react'
import './header.css'
import beast from '../../util/images/beast.png'
import roarSound from '../../util/sound/lion-roar.mp3'

const Header = () => {

  const onEmblemClick = () => {
    const roarAudio = new Audio()
    roarAudio.src = roarSound
    roarAudio.play()
  }

  return (
    <div className="header-container">
      <header className="header-title">BeastCode.io</header>
      <p className="welcome-text">Are you a beast at algos?</p>
      <p className="welcome-text">Master algorithm tech interviews with these problems.</p>
      <button onClick={onEmblemClick}className="beast-button">
        <img className="beast-emblem" src={beast} alt="Beast" />
      </button>
    </div>
  )
}

export default Header