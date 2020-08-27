const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const hbs = require("hbs")
const Book = require("./models/Book")

const app = express()

mongoose
  .connect("mongodb://localhost/books-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected 💾")
  })

//HBS config
app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/views/partials`)

//middlewares
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
  const books = await Book.find()
  res.render("index", { books })
})

app.get("/book/:bookId", async (req, res) => {
  const { bookId } = req.params
  // const book = await Book.find({ title: bookId})
  const book = await Book.findById(bookId)
  res.render("bookDetail", book)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on: http://loclhost:${PORT}`)
})
