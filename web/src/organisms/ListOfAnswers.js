import React from "react"
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"
import LinkToProfile from "../atoms/LinkToProfile"

import DATA_QUESTIONS from "../data/questions"

// -----------------------------------------------------------------------------

const CardAnswer = props => (
  <Card
    style={{
      margin: "10px"
    }}
  >
    <CardBody>
      <CardTitle>
        <LinkToQuestion question={props.question} />
      </CardTitle>
      <CardSubtitle>
        Answered by <LinkToProfile user={props.question.answers[0].createdBy} />
      </CardSubtitle>
      <CardText>{props.question.answers[0].text}</CardText>
    </CardBody>
  </Card>
)

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
