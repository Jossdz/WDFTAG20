const Note = require("../models/Note")

exports.getNotes = async (req, res) => {
  const notes = await Note.find()
  // throw new Error(
  //   "Esto lo vera el cliente, no es un error real pero es lo que pasa si cualquier tipo de cosa se rompe en la app"
  // )
  res.render("index", { notes })
}
exports.createNote = async (req, res) => {
  const { title, body } = req.body
  await Note.create({
    title,
    body
  })
  res.redirect("/")
}
