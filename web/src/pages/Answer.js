import React from "react"
import { Link } from "react-router-dom"

import DATA_QUESTIONS from "../data/questions"

const Answer = () => (
  <ul>
    {DATA_QUESTIONS.map(question => {
      return (
        <li>
          <Link to={`/question/${question._id}`}>
            <h3>{question.title}</h3>{" "}
          </Link>
          <small>asked by {question.createdBy.name}</small>
        </li>
      )
    })}
  </ul>
)

export default Answer
