module.exports = {
  get: (req, res, next) => {
    const text = `RESPONSE ALL USER FROM ${req.path}`
    res.send(text)
  },

  getOne: (req, res, next) => {
    const text = `RESPONSE ONE USER FROM ${req.path}`
    res.send(text)
  }
}
