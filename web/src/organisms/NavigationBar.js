import React from "react"
import { NavLink } from "react-router-dom"

const Home = () => (
  <nav>
    <NavLink to="/welcome">Welcome</NavLink>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/answers">Answers</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/ask">Ask Question</NavLink>
  </nav>
)

export default Home
