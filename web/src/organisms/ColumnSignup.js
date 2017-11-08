import React from "react"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"

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

export default ColumnSignup
