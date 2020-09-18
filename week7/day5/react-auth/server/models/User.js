const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    photo: {
      type: String,
      default: "https://bucket1.glanacion.com/anexos/fotos/20/2836420.jpg"
    },
    password: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
)

const User = mongoose.model("User", userSchema)
module.exports = User
