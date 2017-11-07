import React from "react"
import { Row, Col } from "reactstrap"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

const USER = {
  _id: 0,
  name: "Administrator"
}

const Ask = () => (
  <Col xs={8}>
    <Form>
      <span>{USER.name} asked</span>
      <FormGroup>
        <Input
          type="text"
          name="askText"
          id="askText"
          placeholder="What is your question?"
        />
      </FormGroup>
      <Button>Ask Question</Button>
    </Form>
  </Col>
)

export default Ask
