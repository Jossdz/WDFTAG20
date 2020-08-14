const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

let frames = 0,
  animate = 0

// const coinImage = new Image()
// coinImage.src =
//   "http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/images/coin-sprite-animation-sprite-sheet.png"

class Character {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = 16 * 5
    this.height = 18 * 5
    this.animateX = 0
    this.animateY = 0
    // Extraemos la medida de ancho a partir del ancho de la imagen / cantidad de estados
    this.stateWidth = 48 / 3
    this.stateHeight = 72 / 4
    this.image = new Image()
    this.direction = "DOWN"
    this.image.src =
      "https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png"
  }
  draw() {
    ctx.drawImage(
      this.image,
      16 * this.animateX,
      18 * this.animateY,
      this.stateWidth,
      this.stateHeight,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
  moveUp() {
    this.direction = "UP"
    this.animateY = 1
    this.y -= 10
  }
  moveDown() {
    this.direction = "DOWN"
    this.animateY = 0
    this.y += 10
  }
  moveLeft() {
    this.direction = "LEFT"
    this.animateY = 2
    this.x -= 10
  }
  moveRight() {
    this.direction = "RIGHT"
    this.animateY = 3
    this.x += 10
  }
}

const p1 = new Character()

function update() {
  frames++
  clearCanvas()
  p1.draw()
  // coinAnimation()
  // ctx.drawImage(
  //   //imagen
  //   coinImage,
  //   // x de la imagen
  //   44 * animate,
  //   // y de la imagen
  //   0,
  //   // ancho del fragmento de la imagen
  //   46,
  //   // alto del fragmento de la imagen
  //   40,
  //   // posicion de x en canvas
  //   20,
  //   // posicion de y en canvas
  //   20,
  //   // ancho en canvas
  //   90,
  //   // alto en canvas
  //   90
  // )
}

// function coinAnimation() {
//   if (frames % 3 === 0) {
//     if (animate === 9) animate = 0
//     animate++
//   }
// }

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

setInterval(update, 1000 / 60)

document.addEventListener("keydown", event => {
  p1.animateX++
  if (p1.animateX === 2) p1.animateX = 0
  switch (event.keyCode) {
    case 38:
      //arriba
      p1.moveUp()
      break
    case 40:
      p1.moveDown()
      //abajo
      break
    case 37:
      p1.moveLeft()
      //iz
      break
    case 39:
      p1.moveRight()
      //dere
      break
  }
})

document.addEventListener("keyup", () => {
  p1.animateX = 0
})
