import React from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"
import axios from "axios"

import LinkToProfile from "../atoms/LinkToProfile"

import helpers from "../helpers"

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common["Authorization"] = helpers.getToken()

export default class AskBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      askTextarea: ""
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      title: this.state.askTextarea,
      user: this.props.user
    }

    axios
      .post(`/api/questions`, payload)
      .then(response => {
        // NOTIFY ASKER
        console.log(response.data)
        alert(`Asking success!`)
        // REDIRECT TO ANSWER
        this.props.history.push("/answer")
      })
      .catch(error => {
        console.log(error)
        alert(`${error}`)
      })
  }

  render() {
    const user = this.props.user

    return (
      <Form onSubmit={this.handleSubmit}>
        <h6>
          <LinkToProfile user={user} /> asked
        </h6>
        <FormGroup>
          <Input
            type="textarea"
            name="askTextarea"
            id="askTextarea"
            placeholder="What is your question?"
            value={this.state.askTextarea}
            onChange={this.handleChange}
            onKeyDown={e => {
              if (e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault()
              }
            }}
          />
        </FormGroup>
        <Button color="primary">Ask Question</Button>
      </Form>
    )
  }
}
