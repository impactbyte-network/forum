import React from "react"
import { Row, Col } from "reactstrap"

import Layout from "../templates/Layout"

import ColumnSignup from "../organisms/ColumnSignup"
import ColumnLogin from "../organisms/ColumnLogin"

import helpers from "../helpers"

export default class Welcome extends React.Component {
  componentWillMount() {
    helpers.deleteToken()
  }

  render() {
    return (
      <Layout>
        <div>
          <Row className="text-center" id="row-logo">
            <Col>
              <h1>
                <img src="" alt="LOGO" />
              </h1>
            </Col>
          </Row>

          <Row className="text-center" id="row-tagline">
            <Col>
              <h2>TAGLINE AND DESCRIPTION</h2>
            </Col>
          </Row>

          <hr />

          <Row className="center" id="row-auth">
            <ColumnSignup />
            <ColumnLogin />
          </Row>
        </div>
      </Layout>
    )
  }
}
