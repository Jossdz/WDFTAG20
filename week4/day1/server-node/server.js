const http = require("http")

const server = http.createServer((request, response) => {
  console.log(`Someone has requested ${request.url}`)

  switch (request.url) {
    case "/":
      response.write(`
        <h1>Mi primer server con Node</h1>
        <img src="https://http.cat/101"/>
      `)
      response.end()
      break
    case "/jorge":
      response.write("Pagina de Jorge")
      response.end()
      break
    default:
      response.statusCode = 404
      response.write("Inserte gato aca")
      response.end()
      break
  }
})

server.listen(3000)
