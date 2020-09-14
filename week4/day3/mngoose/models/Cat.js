const { Schema, model } = require("mongoose")

const catSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: "black",
    enum: ["black", "white", "orange"]
  }
})

const Cat = model("Cat", catSchema)

module.exports = Cat
