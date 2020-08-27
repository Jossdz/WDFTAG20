const { Schema, model } = require("mongoose")

const bookSchema = new Schema(
  {
    isbn: String,
    title: String,
    subtitle: String,
    author: String,
    published: String,
    publisher: String,
    pages: Number,
    description: String,
    website: String
  },
  { timestamps: true }
)

module.exports = model("Book", bookSchema)
