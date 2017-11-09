import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"
import LinkToProfile from "../atoms/LinkToProfile"

const CardAnswer = props => {
  const question = props.question
  const length = props.question.answers.length - 1
  const user = props.question.answers[length].createdBy

  return (
    <Card className="m-2">
      <CardBody>
        <CardTitle>
          <LinkToQuestion question={question} />
        </CardTitle>
        <CardSubtitle>
          Answered by <LinkToProfile user={user} />
        </CardSubtitle>
        <CardText>{props.question.answers[0].text}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardAnswer
