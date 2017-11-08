import React from "react"
import { Row } from "reactstrap"

const Content = props => (
  <Row className="mt-5 mb-5 justify-content-md-center">{props.children}</Row>
)

export default Content
