const { Schema, model } = require("mongoose")

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Movie", movieSchema)
