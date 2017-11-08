module.exports = {
  signup: (req, res, next) => {
    const text = `SIGN UP`
    res.send(text)
  },

  login: (req, res, next) => {
    const text = `LOGIN`
    res.send(text)
  }
}
