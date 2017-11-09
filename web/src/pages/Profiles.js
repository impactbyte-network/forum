import React from "react"
import axios from "axios"

import Layout from "../templates/Layout"

import LinkToProfile from "../atoms/LinkToProfile"

export default class Profiles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users`)
      .then(response => {
        const profiles = response.data
        console.log(profiles)
        this.setState({
          profiles: profiles
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const profiles = this.state.profiles
    return (
      <Layout>
        <ul>
          {profiles.map(profile => {
            return (
              <li key={profile.id}>
                <LinkToProfile user={profile} />{" "}
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}
