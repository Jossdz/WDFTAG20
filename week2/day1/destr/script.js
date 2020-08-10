// let person = {
//   name: "Ironhacker",
//   age: 25,
//   favoriteMusic: "Metal"
// }
// let person2 = {
//   name: "Ironhacker2",
//   age: 25,
//   favoriteMusic: "Pop",
//   country: "Lisbon"
// }
// // let { name } = person

// let { favoriteMusic, name, age, country: cn = "Spain" } = person
// let { favoriteMusic: fm2, name: name2, age: age2, country } = person2

// const person = {
//   name: "Ironhacker",
//   age: 25,
//   favoriteMusic: "Metal",
//   address: {
//     street: "Super Cool St",
//     number: 123,
//     city: "Miami",
//     references: {
//       a: "",
//       b: "",
//       c: ""
//     }
//   }
// }

// let {
//   name,
//   age,
//   favoriteMusic,
//   address: {
//     number,
//     city,
//     street,
//     references: { a, b, c }
//   }
// } = person

// console.log(`
// Hello, ${name}.
// You are ${age} years old.
// Your favorite music is ${favoriteMusic}.
// address: ${street}, ${number}, ${city}
// `)

// const numbers = [{ a: "s" }, 2, 3, 4, 5]

// let [obj, , three, four] = numbers

// console.log(obj, three, four)

// const europeanCampuses = [
//   ["madrid", "es"],
//   ["barcelona", "es"],
//   ["berlin", "de"],
//   ["paris", "fr"],
//   ["amsterdam", "nl"],
//   ["lisbon", "pt"]
// ]

// const [, , [, berlinLang]] = europeanCampuses

// console.log(berlinLang)

// const reptiles = ["snake", "lizard", "alligator"]
// const mammals = ["puppy", "kitten", "bunny"]

// const animals = [...reptiles, ...mammals]

// console.log(animals)

// function add(...numbers) {
//   return numbers.reduce((sum, next) => sum + next)
// }

// console.log(add(1, 2, 3))

// function showMovie(title, year, ...actors) {
//   console.log(
//     `${title} is released in ${year} and in the cast are: ${actors.map(
//       name => ` ${name}`
//     )}.`
//   )
// }

// showMovie(
//   "Titanic",
//   "1997",
//   "Leonardo Di Caprio",
//   "Kate Winslet",
//   "Jorge Martinez",
//   "Manu Reyes"
// )

// function getFullName({ firstName, lastName = "Martinez" }) {
//   return `${firstName} ${lastName}`
// }

// console.log(getFullName({ firstName: "Jorge", lastName: "Perez" }))

const unicorn = {
  cola: "pink",
  cejas: true,
  nariz: 2,
  mejillas: "red",
  orejas: 2,
  pezunas: 4,
  cuerno: true,
  ojos: true
}

const { cuerno, cola, ...rest } = unicorn

console.log(rest)
