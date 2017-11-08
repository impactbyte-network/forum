const User = require("../users/model")

const jwt = require("jsonwebtoken")

module.exports = {
  get: (req, res) => {
    const text = "AUTH ENDPOINT"
    res.send(text)
  },

  // SIGN UP WITH A NEW USER DATA
  signup: (req, res, next) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: req.body.role || "user"
    })

    newUser.save(function(err) {
      if (err) {
        res.send({
          success: false,
          message: "Sign up failed"
        })
      } else {
        res.send({
          success: true,
          message: "Sign up success",
          user: newUser
        })
      }
    })
  },

  // LOGIN WITH PROVIDED USER DATA
  login: (req, res, next) => {
    const data = { email: req.body.email }
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: "1d" })

    res.send(token)
  },

  // CHECK TOKEN FOR AUTHORIZATION
  checkToken: (req, res, next) => {
    const decoded = jwt.verify(req.body.token, process.env.SECRET)

    res.send(decoded)
  }
}
