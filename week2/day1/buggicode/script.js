// console.time()

// for (let index = 0; index < 1000; index++) {
//   console.log("tick")
// }

// console.timeEnd()

// // const arr = [1, 2, 3, 4, 5, 5, 6]

// // const arrSum = arr.reduce((acc, current, i) => acc + current)

function add(n1, n2) {
  if (typeof n1 !== "number") {
    throw new TypeError("Dame un numero no seas cabron")
  }
  return n1 + n2
}

// function make_calc(n1, n2, operation) {
//   if (operation == "add") {
//     return add(n1, n2)
//   }
// }

// function init() {
//   var result = make_calc(2, 3, "add")
//   console.log(result)
// }

// // init()

// let a = 0

try {
  // console.log(ad(2, 3))
  // a = 10
  add("3", 4)
} catch (error) {
  console.error("->", error)
  // sentry.send(error)
} finally {
  console.log("esto sucede al final, no importando si funciona o no el codigo ")
}

// console.log(a)
