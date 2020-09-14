const mongoose = require("mongoose")
const Cat = require("./models/Cat")
const UserModel = require("./models/User")

mongoose
  .connect("mongodb://localhost:27017/nombredeladb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("conectadisimos a la db 💾")
  })
  .catch(err => {
    console.error("err => ", err)
  })

// // Forma 1 de crear registros de un modelo
// // const kira = new Cat({ name: "garfield", color: "orange" })

// async function saveCat() {
//   // const newCat = await kira.save()

//   // Forma 2 de crear un registro
//   const newCat = await Cat.create({
//     name: "marciano",
//     color: "orange"
//   })
//   console.log(newCat)
// }

// saveCat()

// async function getAllCats() {
//   // find recibe como argumentos
//   // 1. el query
//   // 2. projection
//   // 3. options (sort, limit, skip)
//   const cats = await Cat.find(
//     {}
//     // { name: 1, _id: 0 },
//     // { sort: { name: -1 }, limit: 1 }
//   )
//   console.log(cats)
// }

// getAllCats()

//==============CRUD====================

// C en Crud

// async function createUser() {
//   await UserModel.create({
//     name: "Jero",
//     password: "1234",
//     job: "Tester"
//   })
//   console.log(`Usuario nuevo guardado con 'exito`)
// }

// createUser()

// U en crUd

async function updateUser(id, name) {
  await UserModel.findByIdAndUpdate(id, { name })
  console.log("usuario actualizado")
}

// D en cruD

// updateUser("5f46d9112834ec3370846d5a", "Hugo")

async function deleteUser(id) {
  await UserModel.findByIdAndRemove(id)
  console.log("usuario borrado")
}

deleteUser("5f46d9112834ec3370846d5a")

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    )
    process.exit(0)
  })
})
