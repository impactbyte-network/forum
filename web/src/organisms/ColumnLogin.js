import React from "react"
import { Col, Form, FormGroup, Label, Input } from "reactstrap"
import axios from "axios"

// import Link from "../atoms/Link"

export default class ColumnLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginName: "",
      loginEmail: "",
      loginPassword: ""
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, payload)
      .then(response => {
        console.log(response.data)

        alert(`SUCCESS! ${JSON.stringify(response.data)}`)

        window.localStorage.setItem("user", response.data)

        // EMPTY OUT FORM INPUTS
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Col xs={6}>
        <h3>Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="loginEmail">Email</Label>
            <Input
              type="email"
              name="loginEmail"
              id="loginEmail"
              value={this.state.loginEmail}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="loginPassword">Password</Label>
            <Input
              type="password"
              name="loginPassword"
              id="loginPassword"
              value={this.state.loginPassword}
              onChange={this.handleChange}
            />
          </FormGroup>
          {/* <FormGroup>
            <Link to="/forgot">Forgot password?</Link>
          </FormGroup> */}
          <input type="submit" value="Login" />
        </Form>
      </Col>
    )
  }
}
