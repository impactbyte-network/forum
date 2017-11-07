import React from "react"
import { Link } from "react-router-dom"

import DATA_PROFILES from "../data/profiles"

const USER = {
  _id: 0,
  name: "Administrator"
}

const Profiles = () => (
  <div>
    <ul>
      {DATA_PROFILES.map(profile => {
        return (
          <li>
            <Link to={`/profile/${profile._id}`}>{profile.name}</Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Profiles
