const baseURL = "http://localhost:8000/cities"
const $body = document.querySelector("body")
let citiesArr
let currentId = 0
let create = true
$body.innerHTML = "<h1>Loading</h1>"
// 1. Necesitamos ver todas las ciudades

async function getCities() {
  const { data: cities } = await axios.get(baseURL)
  citiesArr = cities
  printCities(cities)
}

function printCities(cities) {
  $body.innerHTML = ""
  $body.innerHTML = `
    <h1>Cities</h1>
    <br/>
    <input type="text" name="name" id="name" placeholder="Campus Name">
    <button onclick="sendUpdate()">Create</button>
  `
  cities.forEach(city => {
    $body.innerHTML += `
    <p>${city.name}
      <a onclick="deleteCity(${city.id})">delete</a> - 
      <a onclick="editCity(${city.id})">
        update
      </a></p>
    `
  })
}

// 2. necesitamos editar una ciudad
function editCity(id) {
  const $input = document.querySelector("#name")
  $input.value = citiesArr[id - 1].name
  create = false
  document.querySelector("button").innerText = "Save"
  currentId = id
  console.log("city:", id)
}

async function sendUpdate() {
  const $input = document.querySelector("#name")
  if (create) {
    await axios.post(baseURL, { name: $input.value })
  } else {
    await axios.put(`${baseURL}/${currentId}`, { name: $input.value })
    create = true
  }
  getCities()
}

// 3. neceitamos borrar una ciudad
async function deleteCity(id) {
  await axios.delete(`${baseURL}/${id}`)
  getCities()
}

// 4. Creamos una ciudad nueva

getCities()
