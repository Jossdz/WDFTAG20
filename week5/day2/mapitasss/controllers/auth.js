const User = require("../models/User")
const { hashSync, genSaltSync } = require("bcrypt")
const passport = require("../config/passport")

exports.signupView = (req, res) => {
  res.render("signup")
}

exports.signupProcess = async (req, res) => {
  const { email, password } = req.body

  if (email === "" || password === "") {
    return res.render("signup", { error: "Missing fields." })
  }

  const existingUser = await User.findOne({ email })
  console.log(req.body, existingUser)
  if (existingUser) {
    return res.render("signup", { error: "Error, try again." })
  }
  const hashPwd = hashSync(password, genSaltSync(12))
  await User.create({
    email,
    password: hashPwd
  })
  res.redirect("/login")
}

exports.loginView = (req, res) => {
  res.render("login", { error: req.flash("error") })
}
exports.loginProcess = passport.authenticate("local", {
  successRedirect: "/private",
  failureRedirect: "/login",
  failureFlash: true
})

exports.private = (req, res) => {
  res.render("private", req.user)
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect("/login")
}

exports.listUsers = async (req, res) => {
  const users = await User.find()
  res.render("users", { users })
}

//===========SOCIAL=========

exports.googleProcess = passport.authenticate("google", {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
})
exports.googleRedirect = passport.authenticate("google", {
  successRedirect: "/private",
  failureRedirect: "/" // here you would redirect to the login page using traditional login approach
})

exports.facebookProcess = passport.authenticate("facebook", {
  scope: ["email"]
})
exports.facebookRedirect = passport.authenticate("facebook", {
  successRedirect: "/private",
  failureRedirect: "/"
})

exports.slackProcess = passport.authenticate("slack")
exports.slackRedirect = passport.authenticate("slack", {
  successRedirect: "/private",
  failureRedirect: "/"
})
