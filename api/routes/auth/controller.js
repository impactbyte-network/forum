const User = require("../users/model")

const jwt = require("jsonwebtoken")

module.exports = {
  get: (req, res) => {
    const text = "AUTH ENDPOINT"
    res.send(text)
  },

  signup: (req, res, next) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: "user"
    })

    newUser.save(function(err) {
      if (err) throw err

      res.send({
        success: true,
        message: "New user signed up!",
        user: newUser
      })
    })
  },

  login: (req, res, next) => {
    const data = { email: req.body.email }
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: "1d" })

    res.send(token)
  },

  checkToken: (req, res, next) => {
    const decoded = jwt.verify(req.body.token, process.env.SECRET)

    res.send(decoded)
  }
}
