import React from "react"
import { CardBody, CardTitle, CardSubtitle } from "reactstrap"

import AnswerCard from "../molecules/AnswerCard"

import LinkToProfile from "../atoms/LinkToProfile"

const QuestionCard = props => (
  <CardBody>
    <CardTitle>{props.question.title}</CardTitle>
    <CardSubtitle>
      Asked by <LinkToProfile user={props.question.createdBy} />
    </CardSubtitle>
    <AnswerCard question={props.question} />
  </CardBody>
)

export default QuestionCard
