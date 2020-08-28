require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected 💾")
  })
//views

app.set("views", `${__dirname}/views`)
app.set("view engine", `hbs`)

//middlewares

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", require("./routes"))
app.use("/auth", require("./routes/auth"))

app.listen(process.env.PORT, () => {
  console.log(`listening http://localhost:3000`)
})
