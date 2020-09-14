const express = require("express")

// generamos una instancia de express
const app = express()

//Aca le decimos a express que use la carpeta public como archivos publicos del server
app.use(express.static("public"))

//aca colocamos nuestras rutas
app.get("/", (req, res) => {
  // console.log(__dirname)
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/cat", (req, res) => {
  res.sendFile(`${__dirname}/views/cat-page.html`)
})

// Ponemos al server a escuchar las peticiones
app.listen(3000, () => {
  console.log("listening on: http://localhost:3000")
})
