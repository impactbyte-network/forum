import React from "react"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"

import LinkToProfile from "../atoms/LinkToProfile"

const QuestionCard = props => (
  <Card>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>
        Asked by <LinkToProfile user={props.user} />
      </CardSubtitle>
      <CardText>
        <Button color="primary" size="sm">
          Answer
        </Button>
      </CardText>
    </CardBody>
  </Card>
)

export default QuestionCard
