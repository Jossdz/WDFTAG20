const express = require("express")
const router = express.Router()
const {
  signupProcess,
  signupView,
  loginView,
  loginProcess,
  private,
  logout,
  listUsers,
  googleProcess,
  googleRedirect,
  facebookProcess,
  facebookRedirect,
  slackProcess,
  slackRedirect
} = require("../controllers/auth")
const {
  getPlaces,
  createPlace,
  editPlace,
  deletePlace,
  getPlace,
  createPlaceView
} = require("../controllers/places")
const { enssureLogin, checkRole } = require("../middlewares")
const { ADMIN } = require("../roles")

/* GET home page */
router.get("/", getPlaces)

router.get("/signup", signupView)
router.post("/signup", signupProcess)
router.get("/login", loginView)
router.post("/login", loginProcess)
router.get("/logout", logout)
router.get("/private", enssureLogin("/"), private)
router.get("/users", enssureLogin("/login"), checkRole(ADMIN), listUsers)

//=========SOCIAL===========

router.get("/auth/google", googleProcess)
router.get("/auth/google/callback", googleRedirect)
router.get("/auth/facebook", facebookProcess)
router.get("/auth/facebook/callback", facebookRedirect)
router.get("/auth/slack", slackProcess)
router.get("/auth/slack/callback", slackRedirect)

//===========PLACES=========
// C
router.get("/places/new", enssureLogin("/login"), createPlaceView)
router.post("/places/new", enssureLogin("/login"), createPlace)
// U
router.post("/places/edit/:placeId", editPlace)
// D
router.get("/places/delete/:placeId", deletePlace)
// R
router.get("/places", getPlaces)
router.get("/places/:placeId", getPlace)

module.exports = router
