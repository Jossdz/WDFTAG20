import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "red" }}
            exact
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "red" }}
            to='/login'
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "red" }}
            to='/signup'
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ fontWeight: "bold", color: "red" }}
            to='/profile'
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
