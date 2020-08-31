// exports.enssureLogin = function (route) {
//   return function (req, res, next) {
//     if(req.user){
//       next()
//     }else{
//       res.redirect(route)
//     }
//   }
// }

exports.enssureLogin = route => (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect(route)
  }
}
