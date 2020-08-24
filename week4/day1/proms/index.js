// const yaEstaConOtro = true

// const todaviaTeQuiere = new Promise((resolve, reject) => {
//   if (yaEstaConOtro) {
//     reject("ni pedo bro... ")
//   } else {
//     resolve("Si, aun te ama.")
//   }
// })

// // console.log(todaviaTeQuiere)

// todaviaTeQuiere
//   .then(res => {
//     console.log(res)
//   })
//   .catch(error => console.error(error))

// const covid = false
// const boletos = true

// const conciertoDeTameImpala = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (covid) {
//       reject("evento cancelado")
//     } else {
//       resolve(
//         new Promise((resolve, reject) => {
//           if (boletos) {
//             resolve("Disfruta del concierto")
//           } else {
//             reject("No tienes boletos :(")
//           }
//         })
//       )
//     }
//   }, 3000)
// })

// conciertoDeTameImpala
//   .then(result => result)
//   .then(message => console.log(message))
//   .catch(err => console.error(err))

// const obj = { a: "a" }
// obj.then(res => console.log(res))

// conciertoDeTameImpala
//   .then(dato => {
//     //Esto pasa si la promesa se resuelve con exito !
//     console.log(dato)
//   })
//   .catch(error => {
//     //Esto pasa si hay un error
//     console.error(error)
//     // 1. notificar al usuario de que no pudo ir al concierto por el covid (dar feedback)
//     // 2. comunicarse con un sistema de track de errores
//     // 3.........
//   })

// const songs = [
//   "basket case",
//   "dance macabre",
//   "evil",
//   "house of cards",
//   "baticumbia",
//   "la bamba",
//   "no te duermas Daniel",
//   "La macarena",
//   "bohemian raphsody ft. el posho"
// ]

// const busqueda = "La macarena"

// const getSong = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     try {
//       if (songs.includes(busqueda)) {
//         resolve(`Aqui esta tu cancion: ${busqueda}`)
//       } else {
//         reject(`No encontre ninguna cancion llamada: ${busqueda}`)
//       }
//     } catch (err) {
//       reject("Necesito un nombre para buscar la cancion")
//     }
//   }, 1000)
// })

// // getSong
// //   .then(dato => {
// //     console.log(dato)
// //   })
// //   .catch(errorMsg => console.log(errorMsg))

// // Promise.all([conciertoDeTameImpala, getSong])
// //   .then(results => {
// //     console.log(results)
// //   })
// //   .catch(err => console.error(`Error: ${err}`))

// Promise.race([conciertoDeTameImpala, getSong])
//   .then(dato => console.log(dato))
//   .catch(err => console.error(err))

// -------------Async/await------------------------

// const covid = false
// const boletos = true

// const conciertoDeTameImpala = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (covid) {
//       reject("evento cancelado")
//     } else {
//       resolve(
//         new Promise((resolve, reject) => {
//           if (boletos) {
//             resolve("Disfruta del concierto")
//           } else {
//             reject("No tienes boletos :(")
//           }
//         })
//       )
//     }
//   }, 3000)
// })

// async function resolvePromise() {
//   // Una vez que hago a la funion async, habilito la palabra clave await
//   const result = await conciertoDeTameImpala
//   const message = await result
//   console.log(message)
// }

// resolvePromise()

const songs = [
  "basket case",
  "dance macabre",
  "evil",
  "house of cards",
  "baticumbia",
  "la bamba",
  "no te duermas Daniel",
  "La macarena",
  "bohemian raphsody ft. el posho"
]

const busqueda = "La macarena"

const getSong = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      if (songs.includes(busqueda)) {
        resolve(`Aqui esta tu cancion: ${busqueda}`)
      } else {
        reject(`No encontre ninguna cancion llamada: ${busqueda}`)
      }
    } catch (err) {
      reject("Necesito un nombre para buscar la cancion")
    }
  }, 1000)
})

/// -----------------------

;(async () => {
  const result = await getSong
  console.log(result)
})()

// async function resolverPromesa() {

// }

// resolverPromesa().catch(err => console.error("Error:", err))

// traeralgoDelaDB
//   .then(data => {
//     compararPeliculas(data)
//       .then(peliculasComparadas => {
//         ordenarPeliculas(peliculasComparadas)
//           .then(peliculas => pintarPeliculas(peliculas))
//           .catch(err => console.error(err))
//       })
//       .catch(err => console.error(err))
//   })
//   .catch(err => console.error(err))

// async function pintarPeliculasEnLaUI() {
//   // try{
//     const data = await traeralgoDelaDB
//     const peliculasComparadas = await compararPeliculas(data)
//     const peliculas = await ordenarPeliculas(peliculasComparadas)
//     pintarPeliculas(peliculas)
//   // }catch(err){
//   //   console.error(err)
//   // }
// }

// pintarPeliculasEnLaUI().catch(err => console.error(err))
