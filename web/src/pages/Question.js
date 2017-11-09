import React from "react"
import { Col } from "reactstrap"
import axios from "axios"

import Layout from "../templates/Layout"

import QuestionCard from "../organisms/QuestionCard"

import helpers from "../helpers"

import LinkToProfile from "../atoms/LinkToProfile"

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common["Authorization"] = helpers.getToken()

export default class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Number(props.match.params.id),
      question: {},
      answers: []
    }
  }

  componentWillMount() {
    axios
      .get(`/api/questions/${this.state.id}`)
      .then(response => {
        this.setState({
          question: response.data,
          answers: response.data.answers
        })
      })
      .catch(err => {
        console.log(err)
        alert(err)
      })
  }

  render() {
    const question = this.state.question
    const answers = this.state.answers

    return (
      <Layout>
        <Col>
          {question.createdBy && <QuestionCard question={question} />}
          <hr />
          <div>
            {answers.length ? `${answers.length} answers` : `No answer yet`}
          </div>
          <hr />
          {answers.map(answer => {
            return (
              <div key={answer._id}>
                <h6>
                  <LinkToProfile user={answer.createdBy} /> answered
                </h6>
                <p>{answer.text}</p>
                <hr />
              </div>
            )
          })}
        </Col>
      </Layout>
    )
  }
}
