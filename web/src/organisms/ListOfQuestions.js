import React from "react"
import { Col } from "reactstrap"

import CardQuestion from "../molecules/CardQuestion"

import DATA_QUESTIONS from "../data/questions"

// -----------------------------------------------------------------------------

const Home = () => (
  <Col xs={10}>
    {DATA_QUESTIONS.map(question => {
      return (
        question.answers.length > 0 && (
          <CardQuestion key={question.id} question={question} />
        )
      )
    })}
  </Col>
)

export default Home
