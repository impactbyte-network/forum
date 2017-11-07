import React from "react"
import { Link } from "react-router-dom"

import DATA_QUESTIONS from "../data/questions"

const Home = () => (
  <div>
    <ul>
      {DATA_QUESTIONS.map(question => {
        return (
          <li>
            <Link to={`/question/${question.id}`}>
              <h3>{question.title}</h3>{" "}
            </Link>
            <small>asked by {question.createdBy.name}</small>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Home
