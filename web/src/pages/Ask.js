import React from "react"
import { Col } from "reactstrap"

import Layout from "../templates/Layout"

import AskBar from "../organisms/AskBar"

const Ask = props => {
  const user = props.user
  
  return (
    <Layout>
      <Col xs={12} lg={8}>
        <AskBar user={user} />
      </Col>
    </Layout>
  )
}

export default Ask
