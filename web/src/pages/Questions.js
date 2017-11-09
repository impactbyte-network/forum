import React from "react"
import axios from "axios"

import Layout from "../templates/Layout"

import LinkToQuestion from "../atoms/LinkToQuestion"

export default class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/questions`)
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Layout>
        <ul>
          {this.state.questions.map(question => {
            return (
              <li key={question.id}>
                <LinkToQuestion question={question} />
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}
