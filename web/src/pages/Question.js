import React from "react"

const Question = props => (
  <div>Question: {props.match.params.id || "Unknown"}</div>
)

export default Question
