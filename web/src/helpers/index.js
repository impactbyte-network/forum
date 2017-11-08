import jwt_decode from "jwt-decode"

const helpers = {
  setToken: token => {
    window.localStorage.setItem("user", token)
  },

  getToken: () => {
    const token = window.localStorage.getItem("user")
    return token
  },

  decodeToken: () => {
    const token = helpers.getToken() || ""

    if (token !== "") {
      const decoded = jwt_decode(token)
      return {
        _id: decoded._id,
        id: decoded.id,
        name: decoded.name
      }
    } else {
      return {
        message: "invalid_token"
      }
    }
  }
}

export default helpers
