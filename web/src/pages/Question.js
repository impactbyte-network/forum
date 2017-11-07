import React from "react"

import DATA_QUESTIONS from "../data/questions"

const Question = props => (
  <div>
    {props.match.params.id ? "" : <div>INVALID_ID</div>}
    <h2>
      {DATA_QUESTIONS.filter(question => {
        return question.id === Number(props.match.params.id)
      }).map(question => {
        return question.title
      })}
    </h2>
  </div>
)

export default Question
