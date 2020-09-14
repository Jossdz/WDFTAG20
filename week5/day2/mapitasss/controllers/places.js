const Place = require("../models/Place")
const User = require("../models/User")

exports.getPlaces = async (req, res) => {
  const places = await Place.find()
  res.render("index", { places })
}

exports.getPlace = async (req, res) => {
  const place = await Place.findById(req.params.placeId)
  res.render("placeDetail", place)
}

exports.createPlaceView = (req, res) => res.render("addPlace")

exports.createPlace = async (req, res) => {
  // 1. extraemos la informacion del req.body
  const { name, description, lat, lng } = req.body
  // 2. creamos el lugar
  const location = {
    type: "Point",
    coordinates: [lng, lat]
  }
  const place = await Place.create({
    name,
    description,
    location
  })
  // 3. agregamos el id del lugar a la propiedad places del user en sesion
  await User.findByIdAndUpdate(req.user.id, { $push: { places: place._id } })
  // 4. redireccionamos al inicio
  res.redirect("/")
}

exports.editPlace = async (req, res) => {
  // 1. extraer la inormacion de req.body
  const { name, description } = req.body
  // 2. necesitamos conocer el lugar para actualizarlo? ? :placeId
  const { placeId } = req.params
  // 3. actualizamos
  await Place.findByIdAndUpdate(placeId, { name, description })
  // 4. redireccionamos a la raiz
  res.redirect("/")
}

exports.deletePlace = async (req, res) => {
  // 1. Extraemos la informacion
  const { placeId } = req.params
  // 2. actualizamos
  await Place.findByIdAndDelete(placeId)
  // 3. redireccionamos a la raiz
  res.redirect("/")
}
