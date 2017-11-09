import React from "react"
import axios from "axios"

import Layout from "../templates/Layout"

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {}
    }
  }

  componentWillMount() {
    const id = Number(this.props.match.params.id)
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
      .then(response => {
        const profile = response.data
        console.log(profile)
        this.setState({
          profile: profile
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const profile = this.state.profile
    return (
      <Layout>
        <div>
          <h2>{profile.name}</h2>
          {profile.title && <h4>{profile.title}</h4>}
          {profile.bio && <p>{profile.bio}</p>}
          <small>id: {profile.id}</small>
        </div>
      </Layout>
    )
  }
}
