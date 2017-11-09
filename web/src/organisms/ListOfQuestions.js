import React from "react"
import { Col } from "reactstrap"
import axios from "axios"

import CardQuestion from "../molecules/CardQuestion"

// -----------------------------------------------------------------------------

export default class ListOfQuestions extends React.Component {
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
      <Col xs={10}>
        {this.state.questions.map(question => {
          return <CardQuestion key={question.id} question={question} />
        })}
      </Col>
    )
  }
}
