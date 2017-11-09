const User = require("../../users/model")
const Question = require("../model")

const helpers = require("../../helpers")

module.exports = {
  get: (req, res, next) => {
    res.send("GET ANSWERS")
  },

  getOne: (req, res, next) => {
    res.send("GET ONE ANSWER")
  },

  post: (req, res, next) => {
    const token = req.headers.authorization || req.body.token
    const user = helpers.decodeToken(token)

    console.log(user)

    if (user) {
      // PREPARE NEW QUESTION
      const newAnswer = {
        text: req.body.text,
        createdBy: user._id
      }
      console.log(newAnswer)

      // PUSH THAT NEW ANSWER TO THE SELECTED QUESTION
      Question.update(
        { id: req.params.id },
        { $push: { answers: newAnswer } },
        err => {
          err
            ? res.send(err)
            : res.send({
                message: "New answer saved in selected question",
                data: newAnswer
              })
        }
      )
    } else {
      // NOTIFY IF USER TOKEN IS INVALID
      res.send({ message: "User token is invalid" })
    }
  },

  delete: (req, res, next) => {},

  deleteOne: (req, res, next) => {},

  putOne: (req, res, next) => {}
}
