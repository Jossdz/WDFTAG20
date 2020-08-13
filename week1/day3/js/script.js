// const vaso = {
//   size: 10,
//   volume: 5,
//   content: {
//     alcohol: "3.4%"
//   }
// }

// const tazita = {
//   small: true
// }

// // const taza = Object.assign({ image: true }, vaso, tazita)
// const taza = JSON.parse(JSON.stringify(vaso))

// taza.volume = 6
// // delete taza.volume

// delete taza.content.alcohol

// console.log(taza, vaso)

// const pelicula = {
//   name: "Spider man",
//   pizes: {
//     oscar: true
//   }
// }
// const doc = JSON.parse(JSON.stringify(pelicula))

// doc.name = "Anima"
// doc.pizes.oscar = false

// console.log(doc, pelicula)

const students = ["Jero", "Alba", "Daniel"]
const studentsWEdgar = students.concat("Edgar")

const ironhackers = [...students]

ironhackers.push("Jorge")

console.log(studentsWEdgar)

console.log(...students)
console.log(students, ironhackers)
