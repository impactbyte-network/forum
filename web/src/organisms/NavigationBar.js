import React from "react"
import { NavLink } from "react-router-dom"
import { Row, Col } from "reactstrap"

import Link from "../atoms/Link"

// -----------------------------------------------------------------------------

const NavigationBar = props => {
  const USER = props.user

  return (
    <nav
      style={{
        borderBottom: "1px solid black"
      }}
    >
      <Row>
        {!USER && (
          <Col xs={12} md={7}>
            <Link to="/welcome">LOGO</Link>
            <NavLink to="/welcome">Sign Up / Login</NavLink>
          </Col>
        )}

        {USER && (
          <Col xs={12} md={7}>
            <Link to="/">LOGO</Link>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/answer">Answer</NavLink>
          </Col>
        )}

        {USER && (
          <Col xs={12} md={5}>
            <NavLink to={`/profile/${USER.id}`}>Profile</NavLink>
            <NavLink to="/ask">Ask Question</NavLink>
            <NavLink to="/profiles">[P]</NavLink>
            <NavLink to="/questions">[Q]</NavLink>
            <NavLink to={`/welcome`}>Logout</NavLink>
          </Col>
        )}
      </Row>
    </nav>
  )
}

export default NavigationBar
