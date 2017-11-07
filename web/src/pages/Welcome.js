import React from "react"
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Link } from "react-router-dom"

// LOGO

const Logo = () => (
  <h1>
    <img src="" alt="LOGO" />
  </h1>
)

// TAGLINE

const Tagline = () => <h2>TAGLINE AND DESCRIPTION</h2>

// COLUMN_SIGNUP

const ColumnSignup = () => (
  <Col xs={6}>
    <h3>Sign Up</h3>
    <Form>
      <FormGroup>
        <Label for="signupFullName">Full Name</Label>
        <Input type="email" name="signupFullName" id="signupFullName" />
      </FormGroup>
      <FormGroup>
        <Label for="signupEmail">Email</Label>
        <Input type="email" name="signupEmail" id="signupEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="signupPassword">Password</Label>
        <Input type="password" name="signupPassword" id="signupPassword" />
      </FormGroup>
      <Button>Sign Up</Button>
    </Form>
  </Col>
)

// COLUMN_LOGIN

const ColumnLogin = () => (
  <Col xs={6}>
    <h3>Login</h3>
    <Form>
      <FormGroup>
        <Label for="loginEmail">Email</Label>
        <Input type="email" name="loginEmail" id="loginEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="loginPassword">Password</Label>
        <Input type="password" name="loginPassword" id="loginPassword" />
      </FormGroup>
      <FormGroup>
        <Link to="/forgot">Forgot password?</Link>
      </FormGroup>
      <Button>Login</Button>
    </Form>
  </Col>
)

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
