import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"
import LinkToProfile from "../atoms/LinkToProfile"

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

export default CardAnswer
