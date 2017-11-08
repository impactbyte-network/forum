module.exports = {
  get: (req, res, next) => {
    const text = `RESPONSE ALL FROM ${req.path}`
    res.send(text)
  },

  getOne: (req, res, next) => {
    const text = `RESPONSE ONE FROM ${req.path}`
    res.send(text)
  }
}
