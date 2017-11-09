import React from "react"
import {
  Collapse,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap"
import axios from "axios"

import LinkToProfile from "../atoms/LinkToProfile"

import helpers from "../helpers"

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common["Authorization"] = helpers.getToken()

const initialState = {
  isOpen: false,
  user: helpers.decodeToken(),
  question: {},
  answerTextarea: ""
}

export default class AnswerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const payload = {
      user: this.state.user,
      text: this.state.answerTextarea
    }

    axios
      .post(`/api/questions/${this.state.question.id}/answers`, payload)
      .then(response => {
        this.setState(initialState)
        alert(`Answer success!`)
      })
      .catch(error => {
        alert(`${error}`)
      })
  }

  componentWillMount() {
    this.setState({
      question: this.props.question
    })
  }

  render() {
    return (
      <div>
        <Button
          color={this.state.isOpen ? "secondary" : "primary"}
          size="sm"
          onClick={this.toggleCollapse}
          style={{ marginBottom: "1rem" }}
        >
          Answer
        </Button>

        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <h6>
                  <LinkToProfile user={this.state.user} /> will answer
                </h6>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="answerTextarea"
                    id="answerTextarea"
                    placeholder="Write your answer"
                    value={this.state.answerTextarea}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button color="primary" size="sm">
                  Submit Answer
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}
