import React from "react"
import {
  Collapse,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap"

import LinkToProfile from "../atoms/LinkToProfile"

const USER = {
  _id: 0,
  name: "Administrator"
}

export default class AnswerCard extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <Button
          color={this.state.isOpen ? "secondary" : "primary"}
          size="sm"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Answer
        </Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card>
            <CardBody>
              <Form>
                <h6>
                  <LinkToProfile user={USER} /> will answer
                </h6>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="answerTextarea"
                    id="answerTextarea"
                    placeholder="Write your answer"
                  />
                </FormGroup>
                <Button color="primary" size="sm">
                  Submit Answer
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}
