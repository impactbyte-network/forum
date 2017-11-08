import React from "react"
import { Col } from "reactstrap"
import { Button, Form, FormGroup, Input } from "reactstrap"

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
          type="textarea"
          name="answerTextarea"
          id="answerTextarea"
          placeholder="Write your answer"
        />
      </FormGroup>
      <Button>Submit Answer</Button>
    </Form>
  </Col>
)

export default Ask
