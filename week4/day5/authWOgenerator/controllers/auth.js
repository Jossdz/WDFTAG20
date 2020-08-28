const bcrypt = require("bcrypt")
const User = require("../models/User")

exports.signupView = (req, res) => res.render("auth/signup")

exports.signupProcess = async (req, res) => {
  // 1. Extraer la informacion del req.body
  const { username, email, password } = req.body
  // 2. Verificar que nos enviaron la informacion necesaria
  if (username === "" || email === "" || password === "") {
    return res.render("auth/signup", { error: "Missing fields" })
  }
  // 3. Verificamos que el usuario existe
  const existingUser = await User.findOne({ $or: [{ username }, { email }] })
  if (existingUser) {
    return res.render("auth/signup", { error: "Username or Email in use" })
  }
  // 4. hasheamos la contrase~a
  const salt = bcrypt.genSaltSync(12)
  const hashPwd = bcrypt.hashSync(password, salt)
  // 5. si el usuario no existe... Creamos al usuario
  await User.create({
    username,
    email,
    password: hashPwd
  })

  res.redirect("/auth/login")
}
