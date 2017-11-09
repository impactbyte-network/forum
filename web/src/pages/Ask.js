import React from "react"
import { Col } from "reactstrap"

import Layout from "../templates/Layout"

import AskBar from "../molecules/AskBar"

const Ask = () => (
  <Layout>
    <Col xs={12} lg={8}>
      <AskBar />
    </Col>
  </Layout>
)

export default Ask
