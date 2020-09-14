const express = require("express")

const app = express()

app.use(express.static("public"))
app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

app.get("/", (req, res) => {
  let data = {
    loggedin: 0,
    address: {
      street: "Your heart",
      number: 87
    },
    val: "asd",
    cities: [
      "Amsterdam",
      "Barcelona",
      "Berlin",
      "Lisbon",
      "Madrid",
      "Mexico City",
      "Miami",
      "Paris",
      "Sao Paulo"
    ]
  }
  // el segundo parametro del render siempre espera un Objeto
  res.render("index", data)
})

app.listen(3000, () => {
  console.log("listening on: http://localhost:3000")
})
