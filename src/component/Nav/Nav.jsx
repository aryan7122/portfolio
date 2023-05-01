import React, { useRef } from 'react'
import './Nav.css'

// const ref = useRef(null);
// function about() {
//     window.scrollTo(0, 768);
// }
function Project() {
    window.scrollTo(0, 768);
}
function Contacts() {
    window.scrollTo(0, 2700);
}

const Nav = () => {
  return (
    <div>
          <div className="main">
              <div className="nav_left">
                  <div className="logo">
                      <h1>Aryan web</h1>
                  </div>
              </div>
              <div className="nav_right">
                  <div className="menu">
                      <ul>
                          <li >
                              About
                          </li>
                          <li onClick={Project}>
                              Project
                          </li>
                          <li onClick={Contacts}>
                              Contacts
                          </li>
                      </ul>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Nav
