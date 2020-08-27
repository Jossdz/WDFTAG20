const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")
const Artist = require("./models/Artist")
const Album = require("./models/Album")

mongoose
  .connect("mongodb://localhost/ironmusic", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected 💾")
  })

const app = express()

// view config
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", `hbs`)

//middlewares
app.use(bodyParser.urlencoded({ extended: true }))

// controllers

app.get("/", async (req, res) => {
  const artists = await Artist.find()
  res.render("index", { artists })
})

app.get("/artist/create", (req, res) => res.render("artist/create"))
app.post("/artist/create", async (req, res) => {
  const { name, email, genre } = req.body
  await Artist.create({ name, email, genre })
  res.redirect("/")
})

app.get("/album/create", async (req, res) => {
  const artists = await Artist.find()
  res.render("album/create", { artists })
})
app.post("/album/create", async (req, res) => {
  res.send(req.body)
})

// listen

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`)
})
