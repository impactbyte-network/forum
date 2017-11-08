const mongoose = require("mongoose")
const Schema = mongoose.Schema

module.exports = mongoose.model(
  "User",
  new Schema({
    email: String,
    password: String,
    name: String,
    title: String,
    bio: String,
    role: String
  })
)
