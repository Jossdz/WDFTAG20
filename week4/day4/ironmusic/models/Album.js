const { Schema, model } = require("mongoose")

const albumSchema = new Schema(
  {
    title: String,
    genre: String,
    // TODO: add songs
    items: Number,
    year: Number,
    artist: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Album", albumSchema)
