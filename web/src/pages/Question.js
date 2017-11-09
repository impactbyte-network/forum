import React from "react"
import { Col } from "reactstrap"
import axios from "axios"

import Layout from "../templates/Layout"

import QuestionCard from "../organisms/QuestionCard"

import helpers from "../helpers"

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
        console.log(response.data)
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

  render(props) {
    const question = this.state.question
    const answers = this.state.answers

    return (
      <Layout>
        <Col>
          {/* <QuestionCard question={question} /> */}
          <hr />
          <div>
            {answers.length ? `${answers.length} answers` : `No answer yet`}
          </div>
          {/* <hr />
          {answers.map(answer => {
            return (
              <div key={answer.id}>
                <h6>{answer.createdBy.name}</h6>
                <p>{answer.text}</p>
                <hr />
              </div>
            )
          })} */}
        </Col>
      </Layout>
    )
  }
}
