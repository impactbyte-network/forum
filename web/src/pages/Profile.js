import React from "react"
import axios from "axios"

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {}
    }
  }

  componentWillMount() {
    const id = Number(this.props.match.params.id)
    const USER_PROFILE = axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
    this.setState({
      profile: USER_PROFILE
    })
  }

  render() {
    const profile = this.state.profile
    return (
      <div>
        <h2>{profile.name}</h2>
        {profile.title && <h4>{profile.title}</h4>}
        {profile.bio && <p>{profile.bio}</p>}
        <small>_id: {profile._id}</small>
      </div>
    )
  }
}
