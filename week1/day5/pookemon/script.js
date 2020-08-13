// class Car {
//   constructor(color, owner) {
//     this.color = color
//     this.owner = owner
//   }
//   sayWho() {
//     console.log(this)
//   }
//   paint(color){
//     this.color = color
//   }
// }

// const car1 = new Car("grey", { name: "Diego", licence: true })

// const car2 = new Car("blue", { name: "Jero", licence: true })

// car2.paint('Black')

// car1.sayWho()
// car2.sayWho()

class Pokemon {
  constructor(name, hp = 100, attack, defence, owner, wild) {
    this.attack = attack
    this.wild = wild
    this.name = name
    this.owner = owner
    this.hp = hp
    this.defence = defence
  }
  capture(owner) {
    this.wild = false
    this.owner = owner
  }
  damage(pokemon) {
    pokemon.hp -= this.attack - pokemon.defence
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, hp = 100, attack, defence, owner, wild, type) {
    // el objetivo de super es hacer llegar los parametros de la clase hija a la clase padre
    super(name, hp, attack, defence, owner, wild)
    this.type = type
  }
  //Polimorfismo =  a pesar de que heredamos este metodo, la nueva clase requiere otro comportamiento
  damage(pokemon) {
    if (pokemon.type && pokemon.type === "Fire") {
      pokemon.hp -= (this.attack - pokemon.defence) * 2
    } else {
      pokemon.hp -= this.attack - pokemon.defence
    }
  }
}

class FirePokemon extends Pokemon {
  constructor(name, hp = 100, attack, defence, owner, wild, type) {
    super(name, hp, attack, defence, owner, wild)
    this.type = type
  }
  damage(pokemon) {
    if (pokemon.type && pokemon.type === "Plant") {
      pokemon.hp -= (this.attack - pokemon.defence) * 2
    } else {
      pokemon.hp -= this.attack - pokemon.defence
    }
  }
}

const squirtle = new WaterPokemon("Squirtle", 100, 12, 10, null, true, "Water")
const charmander = new FirePokemon(
  "Charmander",
  110,
  10,
  10,
  "Adriano",
  false,
  "Fire"
)

squirtle.capture("Carlos")

console.log("Antes del madrazo", charmander.hp)

squirtle.damage(charmander)

console.log("despues del madrazo", charmander.hp)

Pokemon.prototype.hi = function () {
  console.log(this)
}

// function BankAccount(clientName, currency) {
//   this.clientName = clientName
//   this.currency = currency
//   this.balance = 200000000
// }

// const bank = new BankAccount("Joss", "MXN")
// console.log(bank)

// BankAccount.prototype.showBalance = function () {
//   return `${this.currency} ${this.balance}`
// }

// console.log(bank.showBalance())

// console.dir(String)
