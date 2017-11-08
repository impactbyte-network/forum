module.exports = {
  setToken: token => {
    window.localStorage.setItem("user", token)
    console.log(token)
  },
  getToken: () => {
    const token = window.localStorage.getItem("user")
    console.log(token)
    return token
  }
}
