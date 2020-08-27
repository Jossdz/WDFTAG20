const { Schema, model } = require("mongoose")

const albumSchema = new Schema(
  {
    title: String,
    genre: String,
    // TODO: add songs
    items: Number,
    year: Number
  },
  {
    timestamps: true
  }
)

module.exports = model("Album", albumSchema)
