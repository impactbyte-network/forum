import React from "react"
import { NavLink } from "react-router-dom"

const style = {
  borderBottom: "1px solid black"
}

const Home = () => (
  <nav style={style}>
    <NavLink to="/welcome">Welcome</NavLink>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/answer">Answer</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/ask">Ask Question</NavLink>
  </nav>
)

export default Home
