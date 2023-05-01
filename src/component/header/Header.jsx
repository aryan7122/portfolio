import React from 'react'
import bggirl from '../../img/bggirl.png'
import './Header.css'

function Project() {
  window.scrollTo(0, 768);
}

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <div className="content">
          <h3>UI/UX Designer</h3>
          <h1>Hello,  my name is Madelyn Torff</h1>
          <p>Short text with details a
            bout you, what you do or your professional career. You can add more information on the about page.</p>
          <div className="btn">
            <button onClick={Project}>Projects</button>
          <button>LinkedIn</button>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={bggirl} alt="" />
      </div>
    </div>
  )
}

export default Header
