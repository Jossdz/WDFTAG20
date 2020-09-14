const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()

app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

// =====MIDDLEWARES

function myFakeMiddleware(req, res, next) {
  req.yolo = "YOLO"
  next()
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("tiny"))

// =========Hendlers/Controllers========
app.get("/", (req, res) => res.render("index"))
app.get("/user/:username/books/:bookid", (req, res) => {
  res.send(req.params)
})

app.get("/user/secret", (req, res) => {
  res.send("secret")
})

app.get("/user/:username", (req, res) => {
  res.send(req.params)
})

app.get("/search", myFakeMiddleware, (req, res, next) => {
  console.log(req.yolo)
  res.send(req.query)
})

app.post("/search", (req, res) => {
  res.send("busqueda")
})
// ------------Login----------------
app.get("/login", (req, res) => {
  console.log(req.yolo)
  res.render("login")
})

app.post("/login", (req, res) => {
  const { email, password } = req.body
  const realEmail = "joss@ironhack.com"
  const pwd = "1234"

  if (email === realEmail && pwd === password) {
    res.render("profile")
  } else {
    res.render("error")
  }
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}`)
})
