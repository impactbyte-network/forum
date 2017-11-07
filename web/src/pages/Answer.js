import React from "react"
import { Link } from "react-router-dom"

import DATA_QUESTIONS from "../data/questions"

const Answer = () => (
  <div>
    <ul>
      {DATA_QUESTIONS.map(question => {
        return (
          <li key={question.id}>
            <Link to={`/question/${question.id}`}>{question.title}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Answer
