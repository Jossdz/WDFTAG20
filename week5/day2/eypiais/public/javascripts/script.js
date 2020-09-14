mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zc2R6IiwiYSI6ImNrMGR4cWk2djBhbWszY3F2b3N4bDBqZTUifQ.ByHk_m_uZOjYaruW6T8Wig"

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-74.0066, 40.7135],
  zoom: 15.5,
  pitch: 45,
  bearing: -17.6,
  container: "map",
  antialias: true
})

let scale = new mapboxgl.ScaleControl({
  unit: "metric"
})

const marker = new mapboxgl.Marker().setLngLat([-74.0066, 40.7135]).addTo(map)

// map.addControl(new mapboxgl.NavigationControl({ position: "left" }))
// map.addControl(
//   new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl
//   }),
//    'top-left'
// )
map.addControl(scale)
map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken
  }),
  "top-left"
)
scale.setUnit("metric")

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { longitude, latitude } }) => {
      const center = [longitude, latitude]
      console.log(center)
      map.setCenter(center)
      marker.setLngLat(center)
    }
  )
}

map.on("load", function () {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers

  var labelLayerId
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
      labelLayerId = layers[i].id
      break
    }
  }

  map.addLayer(
    {
      id: "3d-buildings",
      source: "composite",
      "source-layer": "building",
      filter: ["==", "extrude", "true"],
      type: "fill-extrusion",
      minzoom: 15,
      paint: {
        "fill-extrusion-color": "#aaa",

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        "fill-extrusion-height": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "height"]
        ],
        "fill-extrusion-base": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15,
          0,
          15.05,
          ["get", "min_height"]
        ],
        "fill-extrusion-opacity": 0.6
      }
    },
    labelLayerId
  )
})
