import React from "react"
import { Row, Col } from "reactstrap"

import ColumnSignup from "../organisms/ColumnSignup"
import ColumnLogin from "../organisms/ColumnLogin"

const Logo = () => (
  <h1>
    <img src="" alt="LOGO" />
  </h1>
)

const Tagline = () => <h2>TAGLINE AND DESCRIPTION</h2>

// WELCOME

const Welcome = () => (
  <div>
    <Row className="text-center" id="row-logo">
      <Col>
        <Logo />
      </Col>
    </Row>

    <Row className="text-center" id="row-tagline">
      <Col>
        <Tagline />
      </Col>
    </Row>

    <hr />

    <Row className="center" id="row-auth">
      <ColumnSignup />
      <ColumnLogin />
    </Row>
  </div>
)

export default Welcome
