const Movie = require("../models/Movie")
const mercadopago = require("../config/mercadopago")

exports.getMovies = async (req, res) => {
  const movies = await Movie.find().populate("owner")
  res.render("index", { movies })
}

exports.getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.movieId).populate("owner")
  //1. Generamos nuestra preferencia (que es el objeto que representa nuestro bien o servicio a cobrar)
  const preference = {
    items: [
      {
        title: movie.title,
        unit_price: movie.price,
        quantity: 1
      }
    ],
    notification_url: process.env.WEBHOOK
  }
  const {
    body: { id }
  } = await mercadopago.preferences.create(preference)
  movie.preferenceId = id
  res.render("movieDetail", movie)
}

exports.createMovieView = (req, res) => res.render("movieCreate")

exports.createMovie = async (req, res) => {
  const { title, description, price } = req.body
  const { path } = req.file
  /*TODO: agregar la imagen */
  await Movie.create({
    title,
    description,
    price,
    imageUrl: path,
    owner: req.user.id
  })
  res.redirect("/")
}

exports.editMovie = async (req, res) => {
  const { title, description, price } = req.body
  await Movie.findByIdAndUpdate(req.params.movieId, {
    title,
    description,
    price
  })
  res.redirect("/")
}
exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.movieId)
  res.redirect("/")
}

exports.successPayment = (req, res) => res.render("success-payment")
