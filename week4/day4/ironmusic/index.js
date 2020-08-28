const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")
//Models
const Artist = require("./models/Artist")
const Album = require("./models/Album")
const { findByIdAndUpdate } = require("./models/Artist")

mongoose
  .connect("mongodb://localhost/ironmusic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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

app.get("/artist/:artistId", async (req, res) => {
  const artist = await Artist.findById(req.params.artistId).populate("albums")
  res.render("artist/detail", artist)
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
  // 1. extraer la info del req.body
  const { title, year, items, genre, artistId } = req.body
  // 2. crear el album
  const newAlbum = await Album.create({
    title,
    year,
    items,
    genre,
    artist: artistId
  })
  // 3. asociar el album al artista
  await Artist.findByIdAndUpdate(artistId, { $push: { albums: newAlbum._id } })
  // 4. redireccionar al inicio
  res.redirect("/")
})

// listen

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`)
})
