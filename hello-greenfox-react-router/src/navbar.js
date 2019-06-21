import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <ul className="list">
          <li><Link to="/home">Home</Link></li>
          <li><NavLink to="/simple/state">with States</NavLink></li>
          <li><NavLink to="/simple/redux">with Redux</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
