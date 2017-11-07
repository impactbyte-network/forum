import React from "react"
import { Link } from "react-router-dom"

const QUESTIONS_LIST = [
  {
    id: 0,
    title: "Always happy?"
  },
  {
    id: 2,
    title: "Become hungry?"
  },
  {
    id: 3,
    title: "Cooling off?"
  }
]

const Answer = () => (
  <div>
    <ul>
      {QUESTIONS_LIST.map(question => {
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
