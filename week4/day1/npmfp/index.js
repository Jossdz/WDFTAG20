const chalk = require("chalk")
const cows = require("cows")
const superheroes = require("superheroes")
const supervillains = require("supervillains")

console.log(this)

console.log(chalk.blue(cows()[8]))
wt("Jero")
wt("Jorge")
wt("Alba")
wt("Manu")

function wt(name) {
  console.log(
    chalk.yellowBright(
      `${superheroes.random()} salvo a ${name} de  ${supervillains.random()}`
    )
  )
}
