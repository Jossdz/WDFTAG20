// const students = [
//   { name: "Jorge", stickers: ["js", "react", "vue"] },
//   { name: "Alba", stickers: ["js", "react", "graphql"] },
//   { name: "Manu", stickers: ["js", "react", "css", "Ruby"] }
// ]

// // const doctores = students.map((student, index) => doctorize(student.name))
// // // Notacion corta donde los parametros del cb se aplican directo a los args de la funcion
// // // const doctores = students.map(doctorize)

// // function doctorize(name) {
// //   return `Dr. ${name}`
// // }

// const stk = students.map(student => ({
//   name: student.name,
//   stickers: student.stickers.map(stickerName => {
//     if (student.name === "Jorge") {
//       return "sticker de jquery"
//     } else {
//       return tosticker(stickerName)
//     }
//   })
// }))

// function tosticker(name) {
//   return `sticker de ${name}`
// }

// console.log(stk)

// const arr = [
//   {
//     price: 10
//   },
//   {
//     price: 13
//   },
//   {
//     price: 2
//   },
//   {
//     price: 20
//   }
// ]

// const sum = arr.reduce((acumulador, actual, i) => {
//   console.log("acumulador: ", acumulador, "actual: ", actual, "index:", i)
//   return acumulador + actual.price
// }, 0)

// console.log(sum)

// const menu = [
//   { name: "Carrots", calories: 150 },
//   { name: "Steak", calories: 350 },
//   { name: "Broccoli", calories: 120 },
//   { name: "Chicken", calories: 250 },
//   { name: "Pizza", calories: 520 }
// ]

// const sum = menu.reduce((acc, current, i) => {
//   return acc + current.calories
// }, 0)

// const averageCalories = sum / menu.length

// console.log(averageCalories)
// // 278

// var numbers = [1, 2, 3, 4, 5, 6]

// // let evenNumbers = numbers.filter((number, index, arr) => {
// //   // filter espera que devuelvas una condicion
// //   // si la condicion se cumple va a guardar el elemento iterado actual en el nuevo array
// //   return number % 2 === 0
// // })

// let evenNumbers = numbers.filter(number => number % 2 === 0)

// console.log(evenNumbers)

// const places = [
//   {
//     title: "Awesome Suite 20' away from la Rambla",
//     price: 200,
//     type: "Private Room",
//     pool: true,
//     garage: false
//   },
//   {
//     title: "Private apartment",
//     price: 190,
//     type: "Entire Place",
//     pool: true,
//     garage: true
//   },
//   {
//     title: "Apartment with awesome views",
//     price: 400,
//     type: "Entire Place",
//     pool: false,
//     garage: false
//   },
//   {
//     title: "Apartment in la Rambla",
//     price: 150,
//     type: "Private Room",
//     pool: false,
//     garage: true
//   },
//   {
//     title: "Comfortable place in Barcelona´s center",
//     price: 390,
//     type: "Entire place",
//     pool: true,
//     garage: true
//   },
//   {
//     title: "Room near Sagrada Familia",
//     price: 170,
//     type: "Private Room",
//     pool: false,
//     garage: false
//   },
//   {
//     title: "Great house next to Camp Nou",
//     price: 140,
//     type: "Entire place",
//     pool: true,
//     garage: true
//   },
//   {
//     title: "New apartment with 2 beds",
//     price: 2000,
//     type: "Entire place",
//     pool: false,
//     garage: true
//   },
//   {
//     title: "Awesome Suite",
//     price: 230,
//     type: "Private Room",
//     pool: false,
//     garage: false
//   },
//   {
//     title: "Apartment 10' from la Rambla",
//     price: 930,
//     type: "Entire place",
//     pool: true,
//     garage: true
//   }
// ]

// const wPool = places.filter(place => {
//   place.pool
// })
// const woPool = places.filter(place => {
//   !place.pool
// })

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18]
// Copia del array nombers
const arrCopy = [...numbers]
arrCopy.sort((a, b) => a - b).reverse()

console.log(numbers)

// console.log(hi)
