import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  {
    link: "about",
    text: "ABOUT",
    id: "1"
  },
  {
    link: "portfolio",
    text: "PORTFOLIO",
    id: "2"
  },
  {
    link: "contact",
    text: "CONTACT",
    id: "3"
  }
]

export default function Navbar() {
  
  
  return (
    <>
      <nav className="navbar py-3 fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand h1 fw-bold fs-2" to="">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
              {/* //function bara  */}
              {links.map(link=><li key={link.id} className="nav-item rounded">
                <NavLink className="nav-link fw-bold rounded px-2" to={link.link}>{link.text}</NavLink>
              </li>)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
