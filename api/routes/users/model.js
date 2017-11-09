const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AutoIncrement = require("mongoose-sequence")(mongoose)

const UserSchema = mongoose.Schema({
  id: Number,
  email: String,
  password: String,
  name: String,
  title: String,
  bio: String,
  role: String
})

UserSchema.plugin(AutoIncrement, { id: "user_id", inc_field: "id" })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel
