import React from "react"
import { Col } from "reactstrap"

import QuestionCard from "../organisms/QuestionCard"

import DATA_QUESTIONS from "../data/questions"

const Question = props => {
  const question = DATA_QUESTIONS.filter(question => {
    return question._id === Number(props.match.params.id)
  })

  const answers = question[0].answers || 0

  return (
    <Col>
      <QuestionCard question={question[0]} />

      <hr />

      <div>
        {answers.length ? `${answers.length} answers` : `No answer yet`}
      </div>

      <hr />

      {answers.map(answer => {
        return (
          <div key={answer._id}>
            <h6>{answer.createdBy.name}</h6>
            <p>{answer.text}</p>
            <hr />
          </div>
        )
      })}
    </Col>
  )
}

export default Question
