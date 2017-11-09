import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

import LinkToQuestion from "../atoms/LinkToQuestion"

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
    </CardBody>
  </Card>
)

export default CardAnswer
