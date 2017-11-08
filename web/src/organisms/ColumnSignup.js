import React from "react"
import { Col, Form, FormGroup, Label, Input } from "reactstrap"
import axios from "axios"

const initialState = {
  signupName: "",
  signupEmail: "",
  signupPassword: ""
}

export default class ColumnSignup extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  // HANDLE CHANGE IN SIGN UP FORM

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  // HANDLE SUBMIT SIGN UP

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      name: this.state.signupName,
      email: this.state.signupEmail,
      password: this.state.signupPassword
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, payload)
      .then(response => {
        alert(`SIGN UP SUCCESS!`)
        this.setState(initialState)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // RENDER SIGN UP FORM

  render() {
    return (
      <Col xs={6}>
        <h3>Sign Up</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="signupName">Full Name</Label>
            <Input
              type="text"
              name="signupName"
              id="signupName"
              value={this.state.signupName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupEmail">Email</Label>
            <Input
              type="email"
              name="signupEmail"
              id="signupEmail"
              value={this.state.signupEmail}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="signupPassword">Password</Label>
            <Input
              type="password"
              name="signupPassword"
              id="signupPassword"
              value={this.state.signupPassword}
              onChange={this.handleChange}
            />
          </FormGroup>
          <input type="submit" value="Sign Up" />
        </Form>
      </Col>
    )
  }
}
