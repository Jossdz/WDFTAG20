// exports.enssureLogin = function (route) {
//   return function (req, res, next) {
//     if(req.user){
//       next()
//     }else{
//       res.redirect(route)
//     }
//   }
// }
// currying
exports.enssureLogin = route => (req, res, next) => {
  // req.isAuthenticated tambien nos ayuda a revisar si tenemos una sesion
  if (req.user) {
    next()
  } else {
    res.redirect(route)
  }
}

exports.checkRole = role => (req, res, next) => {
  if (req.user.role === role) {
    next()
  } else {
    res.redirect("/")
  }
}
