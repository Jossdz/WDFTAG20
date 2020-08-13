class Pokemon {
  constructor(name, hp, defense, attack) {
    this.name = name
    this.hp = hp
    this.defense = defense
    this.attack = attack
  }
  receiveDamage(damage) {
    this.hp -= damage
  }
}
