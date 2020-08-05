// function sum(num1, num2) {
//   return [num1, num2]
// }

// const result = sum(2, 7)

// // console.log(saludo)
// console.log(result[0])

// turnHoursToMinutes()

// function printName(name) {
//   return `Name is ${name}.`
// }

// console.log(printName("Jero"))

// function printName(name) {
//   if (name.length === 0) {
//     return "Please provide a valid name!"
//   }

//   return `Name is ${name}.`
// }

// console.log(printName(""))

// console.log(printName("Lupita"))

// function encenderCoche(){
// // ........
// }

// encenderCoche()

// Codigo correcto para el ultimo ejemplo de funciones

// let arr = [1, , 3, 4]
// function sum(array) {
//   if (!array.length) return

//   let sum = 0

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }

//   return sum
// }

// function avg(array) {
//   if (!array.length) return

//   return sum(array) / array.length
// }

// console.log(avg(arr))

//console.log(welcomeMessage("So nice to have you here! Welcome!"))

// Tradicional
// function welcomeMessage(message) {
//   return message
// }

// function expression

// let welcomeMessage = function (message) {
//     return message
//   }

// function assigned to a variable
// function eatDinner() {
//   setTimeout(function () {
//     console.log("Eating the dinner!")
//   }, 2000)
// }

// function eatDessert() {
//   console.log("Eating the dessert!")
// }

// eatDinner()
// eatDessert()

// function eatDinner(cb) {
//   // aca vamos a la DB
//   // Traemos info de una API
//   console.log("eating the dinner!")
//   // Esto debe suceder siempre y cuando lo de arriba termine de ejecutar
//   //Aca es donde usamos ya la informacion
//   cb()
// }

// function eatDessert() {
//   console.log("Eating the dessert!")
// }

// eatDinner(function () {
//   console.log("Eating the dessert!")
// })

// function obtenerSabor(cb) {
//   const flavor = prompt("Sabor de tu helado favorito")
//   cb(flavor)
// }

// obtenerSabor(function (sabor) {
//   console.log(`Quiero un maldito helado de ${sabor}`)
// })

// obtenerSabor(function (sabor) {
//   console.log(`Me da un helado de ${sabor} por favor 🙏`)
// })

// // funcion tradicional
// function doctorize(name) {
//   return `Dr. ${name}`
// }
// // function expression
// const doctorize = function(name) {
//   return `Dr. ${name}`
// }
// arrow f
// const doctorize = name => `Dr. ${name}`

// console.log(doctorize("Adriano"))
// console.log(this)

// const user = {
//   name: "ana",
//   age: 29,
//   getOlder: function () {
//     console.log(this)
//     console.log(this.name)
//     this.age += 1
//   },
//   car: {
//     color: "red",
//     turnOn: function () {
//       console.log("Car: ", this)
//     }
//   }
// }

// const user2 = {
//   name: "Jero",
//   age: 29,
//   getOlder: function () {
//     console.log(this)
//     console.log(this.name)
//     this.age += 1
//   }
// }

// console.log(user.age)
// user.getOlder()
// console.log(user.age)
// console.log(user2)

// user.car.turnOn()

// function printArgs() {
//   console.log(arguments)
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i])
//   }
// }
// printArgs("hi", "my", "name", "is", "joss")

// const students = [
//   { name: "Jero", attendance: false },
//   { name: "Yvan", attendance: false },
//   { name: "Alba", attendance: false }
// ]

// // Push agrega un nuevo(s) elemento(s) al final del arreglo
// console.log(
//   students.push(
//     { name: "Adriano", attendance: false },
//     { name: "Edgar", attendance: false }
//   )
// )
// // unshift agrega el elemento al inicio del arreglo
// // students.unshift("Daniel")

// // console.log(students)

// // students.splice(4, 2)
// // For each recibe como parametro el elemento a iterar y su indice
// students.forEach((student, i) => {
//   if (i % 2 === 0) student.attendance = true
// })

// console.log(students)

// let phrase = "This is long enough for a string to count it words"

// const arr = phrase.split("").reverse()

// console.log(arr)

////////////////////////////////////////////////////////////

// var a = 10,
//   b = 15

// const operations = {
//   a: 5,
//   b: 5,
//   sum: function (n1, n2) {
//     console.log(this)
//     return this.a + this.b
//   },
//   res: function (n1, n2) {
//     return n1 - n2
//   }
// }
// const args = [2, 3]
// console.log(operations.sum())

// var fer = { name: "Fer", coder: true, nationality: "Mexican" }
// var harry = { name: "Harry", coder: true, nationality: "Taiwanese" }

// var update = function (name, coder, nationality) {
//   this.name = name
//   this.coder = coder
//   this.nationality = nationality
// }

// update.call(fer, "Fer", true, "Spanish")
// update.apply(harry, ["Harry", true, "Canadian"])

// Esta es la forma en la que podemos respetar el contexto del objeto edgar en un metodo donde el contexto cambia a su objeto

// const edgar = {
//   name: "edgar",
//   car: {
//     turnOn: function () {
//       console.log(`Este es el coche de ${this.name}`)
//     }
//   }
// }
// // edgar.car.turnOn()
// edgar.car.turnOn.bind(edgar)()

// const edgar = {
//   name: "edgar",
//   car: {
//     engine: {
//       turnOn: () {
//         console.log(this)
//         console.log(`Este es el coche de ${this.name}`)
//       }
//     } //.bind(this) react
//   }
// }
// // edgar.car.turnOn()
// edgar.car.engine.turnOn()

// let group = {
//   title: "Our Group",

//   students: ["Jero", "Pete", "Daniel"],

//   showList() {
//     this.students.forEach(function (student) {
//       // Error: Cannot read property 'title' of undefined
//       console.log(this.title + ": " + student)
//     })
//   }
// }

// group.showList()

// let group = {
//   title: "Our Group",

//   students: ["Jero", "Pete", "Daniel"],

//   showList() {
//     this.students.forEach(student => {
//       // Error: Cannot read property 'title' of undefined
//       console.log(this.title + ": " + student)
//     })
//   }
// }

// group.showList()
