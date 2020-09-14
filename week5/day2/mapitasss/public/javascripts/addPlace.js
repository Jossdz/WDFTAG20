window.onload = () => {
  const gc = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })

  gc.on("result", e => {
    const [lng, lat] = e.result.center
    const $lat = document.querySelector("#lat")
    const $lng = document.querySelector("#lng")
    $lat.value = lat
    $lng.value = lng
  })

  map.addControl(gc)
}
