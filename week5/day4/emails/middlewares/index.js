exports.checkErrors = controller => (req, res, next) =>
  controller(req, res).catch(next)
exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect("/auth/login")
  }
}
