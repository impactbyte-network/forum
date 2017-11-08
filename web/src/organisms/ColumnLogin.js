import React from "react"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"

// import Link from "../atoms/Link"

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
      {/* <FormGroup>
        <Link to="/forgot">Forgot password?</Link>
      </FormGroup> */}
      <Button>Login</Button>
    </Form>
  </Col>
)

export default ColumnLogin
