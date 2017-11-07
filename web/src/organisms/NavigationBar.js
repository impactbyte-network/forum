import React from "react"
import { NavLink } from "react-router-dom"

const USER = {
  _id: 0,
  name: "Administrator"
}

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
    <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
    <NavLink to="/ask">Ask Question</NavLink>
  </nav>
)

export default Home
