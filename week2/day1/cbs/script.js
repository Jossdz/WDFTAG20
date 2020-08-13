// console.log("pedir comida")
// const mamapreprarocomida = false

// const timeoutId = setTimeout(() => {
//   console.log("la comida llego")
// }, 3000)

// if (mamapreprarocomida) {
//   clearTimeout(timeoutId)
// }

// console.log("lavar los trastes")
// console.log("ordenar mi cuarto")

let secconds = 0

let intervalId = setInterval(() => {
  secconds++
  console.log(`han pasado ${secconds} segundos`)
  if (secconds === 60) {
    clearInterval(intervalId)
  }
}, 1000)

// aca ponemos una pausa inmediata
clearInterval(intervalId)
// aca continuamos la ejecuci'on
intervalId = setInterval(() => {
  secconds++
  console.log(`han pasado ${secconds} segundos`)
  if (secconds === 60) {
    clearInterval(intervalId)
  }
}, 1000)
