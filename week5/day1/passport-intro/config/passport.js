const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const { compareSync } = require("bcrypt")
const User = require("../models/User")

//modificar la libreria y la vamos a devolver
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password" //  Por defecto toma esta propiedad y podemos prescindir de esta linea
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email })
        if (!user) return done(null, false, { message: "incorrect username" })
        if (!compareSync(password, user.password))
          return done(null, false, { message: "Incorrect password" })
        // una vez ejecutamos done con informacion referente al user, ese objeto user se le envia al serialize
        done(null, user)
      } catch (error) {
        console.error(error)
        done(error)
      }
    }
  )
)
// serialize recibe el usuario que envio el callback de la(o las) strategia(s)
passport.serializeUser((user, done) => {
  // tenemos que mandar el identificador del usuario para que deserialize verifique esta informacion en la base de datos.
  done(null, user._id)
})
// Eta funcion recibe el identificador que serialize devuelve con su callback para obtener una vez mas la informacion de la base de datos y solo guardar en sesion lo que necesitemos
passport.deserializeUser(async (id, done) => {
  try {
    const { email } = await User.findById(id)
    // const user = await User.findById(id)
    // delete user.password
    // una vez ejecutamos done en el desszerialize esta informacio se almacena en la propiedad req.user
    done(null, { email, yolo: "asdfas" })
    // done(null, user)
  } catch (error) {
    done(error)
  }
})

module.exports = passport
