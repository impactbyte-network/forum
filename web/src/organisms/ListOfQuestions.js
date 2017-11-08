import React from "react"
import { Col, Card, CardBody, CardTitle } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"

import DATA_QUESTIONS from "../data/questions"

// -----------------------------------------------------------------------------

const CardQuestion = props => (
  <Card
    style={{
      margin: "10px"
    }}
  >
    <CardBody key={props.question._id}>
      <CardTitle>
        <LinkToQuestion question={props.question} />
      </CardTitle>
    </CardBody>
  </Card>
)

// -----------------------------------------------------------------------------

const Home = () => (
  <Col xs={10}>
    {DATA_QUESTIONS.map(question => {
      return (
        question.answers.length > 0 && (
          <CardQuestion key={question._id} question={question} />
        )
      )
    })}
  </Col>
)

export default Home
