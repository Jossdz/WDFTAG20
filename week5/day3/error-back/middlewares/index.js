// exports.catchErrors = function (fn) {
//   return function (req, res, next) {
//     fn(req, res).catch(err => next(err))
//   }
// }

exports.catchErrors = controller => (req, res, next) =>
  controller(req, res).catch(next)
