import React from "react"
import { Col } from "reactstrap"

import CardAnswer from "../molecules/CardAnswer"

import DATA_QUESTIONS from "../data/questions"

// -----------------------------------------------------------------------------

const Home = () => (
  <Col xs={10}>
    {DATA_QUESTIONS.map(question => {
      return (
        question.answers.length > 0 && (
          <CardAnswer key={question.id} question={question} />
        )
      )
    })}
  </Col>
)

export default Home
