mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zc2R6IiwiYSI6ImNrMGR4cWk2djBhbWszY3F2b3N4bDBqZTUifQ.ByHk_m_uZOjYaruW6T8Wig"
// tenemos que definir el centro para que al cambiar se afecte realmente en el geocoder
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-79.4512, 43.6568],
  zoom: 5
})
