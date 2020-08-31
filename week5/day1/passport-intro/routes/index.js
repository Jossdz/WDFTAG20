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
  googleRedirect
} = require("../controllers/auth")
const { enssureLogin, checkRole } = require("../middlewares")
const { ADMIN } = require("../roles")

/* GET home page */
router.get("/", (req, res, next) => {
  console.log(req.user)
  res.render("index")
})

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
module.exports = router
