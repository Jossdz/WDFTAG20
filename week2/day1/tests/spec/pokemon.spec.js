describe("Pokemon", function () {
  let pokemon

  beforeEach(function () {
    pokemon = new Pokemon("pikachu", 100, 5, 20)
  })

  it("el pokemon tiene una propiedad name y el valor es pikachu", function () {
    expect(pokemon.name).toEqual("pikachu")
  })

  it("La vida del pokemon debe verse reducida cuando ejecutamos el metodo receiveDamage", function () {
    pokemon.receiveDamage(20)
    expect(pokemon.hp).toEqual(80)
  })
})
