import React from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

const USER = {
  _id: 0,
  name: "Administrator"
}

const Ask = () => (
  <Form>
    <span>{USER.name} asked</span>
    <FormGroup>
      <Input
        type="textarea"
        name="askTextarea"
        id="askTextarea"
        placeholder="What is your question?"
        onKeyDown={e => {
          if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
          }
        }}
      />
    </FormGroup>
    <Button color="primary">Ask Question</Button>
  </Form>
)

export default Ask
