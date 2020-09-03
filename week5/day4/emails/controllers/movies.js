const Movie = require("../models/Movie")

exports.getMovies = async (req, res) => {
  const movies = await Movie.find().populate("owner")
  res.render("index", { movies })
}
exports.getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.movieId)
  res.render("index", movie)
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
