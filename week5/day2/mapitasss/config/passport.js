const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const SlackStrategy = require("passport-slack").Strategy
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
//GOOGLE
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("PROFILE: ", profile)
      const user = await User.findOne({ googleID: profile.id })
      if (!user) {
        const user = await User.create({
          email: profile.emails[0].value,
          googleID: profile.id,
          photo: profile.photos[0].value
        })
        done(null, user)
      }
      done(null, user)
    }
  )
)
//FACEBOOK
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "email", "gender", "link", "name", "photos"]
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({
        facebookID: profile.id
      })
      if (!user) {
        const user = await User.create({
          facebookID: profile.id,
          email: profile.emails[0].value,
          photo: profile.photos[0].value
        })
        done(null, user)
      }
      done(null, user)
    }
  )
)
//SLACK
passport.use(
  new SlackStrategy(
    {
      clientID: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_SECRET,
      callbackURL: "/auth/slack/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ slackID: profile.user.id })
      if (!user) {
        const user = await User.create({
          slackID: profile.user.id,
          email: profile.user.email,
          photo: profile.user.image_original || profile.user.image_512
        })
        done(null, user)
      }
      done(null, user)
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
    // const { email, role, photo } = await User.findById(id)
    const user = await User.findById(id)
    delete user.password
    // una vez ejecutamos done en el desszerialize esta informacio se almacena en la propiedad req.user
    // done(null, { email, role, photo })
    done(null, user)
  } catch (error) {
    done(error)
  }
})

module.exports = passport
