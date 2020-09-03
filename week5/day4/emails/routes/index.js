const express = require("express")
const router = express.Router()
const {
  getMovies,
  getMovie,
  createMovie,
  editMovie,
  deleteMovie,
  createMovieView
} = require("../controllers/movies")

const upload = require("../config/cloudinary")

const { checkErrors, isAuth } = require("../middlewares")
/* GET home page */
router.get("/", getMovies)

// Movies CRUD

// router.get("/movies", getMovies)
router.get("/movies/new", isAuth, createMovieView)
router.get("/movies/:movieId", getMovie)
router.post("/movies", isAuth, upload.single("image"), checkErrors(createMovie))
router.post("/movies/edit/:movieId", editMovie)
router.get("/movies/delete/:movieId", deleteMovie)

module.exports = router
