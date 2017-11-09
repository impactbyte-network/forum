import React from "react"

import Layout from "../templates/Layout"

import LinkToQuestion from "../atoms/LinkToQuestion"

import DATA_QUESTIONS from "../data/questions"

const Questions = () => (
  <Layout>
    <ul>
      {DATA_QUESTIONS.map(question => {
        return (
          <li>
            <LinkToQuestion question={question} />
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default Questions
