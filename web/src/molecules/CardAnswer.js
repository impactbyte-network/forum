import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"
import LinkToProfile from "../atoms/LinkToProfile"

const CardAnswer = props => {
  const question = props.question
  const length = props.question.answers.length - 1
  const answer = props.question.answers[length]
  const user = answer.createdBy

  return (
    <Card className="m-2">
      <CardBody>
        <CardTitle>
          <LinkToQuestion question={question} />
        </CardTitle>
        <CardSubtitle>
          Answered by <LinkToProfile user={user} />
        </CardSubtitle>
        <CardText>{answer.text}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardAnswer
