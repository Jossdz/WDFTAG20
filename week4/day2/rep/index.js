// const obj = {
//   name: "Carlos"
//   // hobbies: ["gift para el ritual", "shell shockers"]
// }

// // const arr = [1, 2, 3, 4, 5]

// // // const { name } = obj

// // // console.log(name)

// // const [, , tres, , cinco] = arr

// // console.log(tres + cinco)

// function sayHi({ name, hobbies: pasatiempo = ["tocar guitarra"] }) {
//   return `Hola mi nombre es ${name} y mis hobies son: ${pasatiempo.map(
//     hob => ` ${hob}`
//   )}`
// }

// console.log(sayHi(obj))

// class X {
//   getFn() {
//     return () => {
//       return this
//     }
//   }
// }

// const xi = new X()

// console.log(xi.getFn()())

// class LexicallyBound {

//   getFunction() {
//     return () => {
//       return this; //change this
//     }
//   }

//   getArgumentsFunction() {
//     return () => arguments;
//   }
// }
