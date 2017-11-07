import React from "react"
import { Col } from "reactstrap"

import DATA_QUESTIONS from "../data/questions"

const Question = props => (
  <Col>
    {props.match.params.id ? "" : <div>INVALID_ID</div>}
    <h2>
      {DATA_QUESTIONS.filter(question => {
        return question.id === Number(props.match.params.id)
      }).map(question => {
        return question.title
      })}
    </h2>
  </Col>
)

export default Question
