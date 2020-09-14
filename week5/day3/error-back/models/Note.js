const { Schema, model } = require("mongoose")

const noteSchema = new Schema({
  title: String,
  body: String
})

module.exports = model("Note", noteSchema)
