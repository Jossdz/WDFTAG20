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

app.get("/book/new", (req, res) => {
  res.render("newBook")
})

app.get("/book/:bookId", async (req, res) => {
  const { bookId } = req.params
  // const book = await Book.find({ title: bookId})
  const book = await Book.findById(bookId)
  res.render("bookDetail", book)
})

app.post("/book/new", async (req, res) => {
  const { title, subtitle, description, publisher, website, pages } = req.body
  await Book.create({ title, subtitle, description, publisher, website, pages })
  res.redirect("/")
})

app.post("/book/update/:bookId", async (req, res) => {
  const { title, subtitle, description, publisher, website, pages } = req.body
  const { bookId } = req.params

  await Book.findByIdAndUpdate(bookId, {
    title,
    subtitle,
    description,
    publisher,
    website,
    pages
  })

  res.redirect(`/book/${bookId}`)
})

app.get("/book/delete/:bookId", async (req, res) => {
  const { bookId } = req.params
  await Book.findByIdAndDelete(bookId)
  res.redirect("/")
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on: http://loclhost:${PORT}`)
})
