import React from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

import LinkToProfile from "../atoms/LinkToProfile"

const Ask = ({ user }) => {
  return (
    <Form>
      <h6>
        <LinkToProfile user={user} /> asked
      </h6>
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
}

export default Ask
