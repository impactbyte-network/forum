import React from "react"
import { Col } from "reactstrap"
import axios from "axios"

import CardAnswer from "../molecules/CardAnswer"

// -----------------------------------------------------------------------------

export default class ListOfAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`)
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Col xs={8}>
        {this.state.questions.map(question => {
          return (
            question.answers.length > 0 && (
              <CardAnswer key={question.id} question={question} />
            )
          )
        })}
      </Col>
    )
  }
}
