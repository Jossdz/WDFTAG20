const express = require("express")
const router = express.Router()
const {
  signupProcess,
  signupView,
  loginView,
  loginProcess,
  private,
  logout
} = require("../controllers/auth")
const { enssureLogin } = require("../middlewares")
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

router.get("/signup", signupView)
router.post("/signup", signupProcess)
router.get("/login", loginView)
router.post("/login", loginProcess)
router.get("/logout", logout)
router.get("/private", enssureLogin("/"), private)

module.exports = router
