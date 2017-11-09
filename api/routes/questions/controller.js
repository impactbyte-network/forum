const Question = require("./model")

module.exports = {
  get: (req, res, next) => {
    const text = `RESPONSE ALL QUESTIONS FROM ${req.path}`
    res.send(text)
  },

  getOne: (req, res, next) => {
    const text = `RESPONSE ONE QUESTIONS FROM ${req.path}`
    res.send(text)
  },

  post: (req, res, next) => {
    const text = `POST ONE QUESTION`
    res.send(text)
  }
}
