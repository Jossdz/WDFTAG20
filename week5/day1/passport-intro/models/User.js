const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    photo: {
      type: String,
      default:
        "https://pbs.twimg.com/profile_images/1285041076718514178/nGeGj7E8.jpg"
    },
    password: String,
    role: {
      type: String,
      enum: ["ADMIN", "GUEST", "DINOSAUR"],
      default: "GUEST"
    },
    googleID: String,
    facebookID: String,
    slackID: String
  },
  {
    timestamps: true
  }
)

module.exports = model("User", userSchema)
