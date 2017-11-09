const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const QuestionSchema = mongoose.Schema({
  title: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  answers: [
    {
      text: String,
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ]
})

QuestionSchema.plugin(AutoIncrement, {
  id: "question_id",
  inc_field: "id"
})
QuestionSchema.plugin(AutoIncrement, {
  id: "question_answer_id",
  inc_field: "id"
})

const QuestionModel = mongoose.model("Question", QuestionSchema)

module.exports = QuestionModel
