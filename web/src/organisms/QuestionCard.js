import React from "react"
import { CardBody, CardTitle, CardSubtitle } from "reactstrap"

import AnswerBox from "../molecules/AnswerBox"

import LinkToProfile from "../atoms/LinkToProfile"

const QuestionCard = props => {
  return (
    <CardBody>
      <CardTitle>{props.question.title}</CardTitle>
      <CardSubtitle>
        Asked by <LinkToProfile user={props.question.createdBy} />
      </CardSubtitle>
      <AnswerBox question={props.question} />
    </CardBody>
  )
}

export default QuestionCard
