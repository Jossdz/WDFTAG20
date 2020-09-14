const express = require("express")
const passport = require("passport")
const router = express.Router()
const User = require("../models/User")
const transporter = require("../config/mailer")
const hankey = require("../templates/welcome")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const bcryptSalt = 10

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") })
})

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
)

router.get("/signup", (req, res, next) => {
  res.render("auth/signup")
})

router.post("/signup", async (req, res, next) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" })
    return
  }

  const user = await User.findOne({ username })
  if (user !== null) {
    res.render("auth/signup", { message: "The username already exists" })
    return
  }

  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)

  const newUser = await User.create({
    username,
    email,
    password: hashPass
  })

  // aca podemos enviar el correo de bienvenida a nuestra plataforma que no hace nada en absoluto :D
  await transporter.sendMail({
    from: '"La plataforma que no hace nada" <ironhackprojects@gmail.com>',
    to: email,
    subject: "Welcome to the useless app",
    text: "werqwertqwerqwerq",
    html: hankey(username, email, newUser._id)
  })

  res.redirect("/")
})

router.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

module.exports = router
