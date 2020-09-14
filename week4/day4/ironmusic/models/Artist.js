const { Schema, model } = require("mongoose")

const artistSchema = new Schema(
  {
    name: String,
    email: String,
    genre: String,
    albums: [
      {
        type: Schema.Types.ObjectId,
        ref: "Album"
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = model("Artist", artistSchema)
