const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

let y1 = 0
let y2 = 0
let intervalId

class Character {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = 50
    this.height = 50
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  moveUp() {
    this.y -= 10
  }
  moveLeft() {
    this.x -= 10
  }
  moveRight() {
    this.x += 10
  }
  moveDown() {
    this.y += 10
  }
}

const p1 = new Character()

function update() {
  // 1. Guardar el estado (o afectarlo)
  // changeState()
  // 2. Limpiar el canvas
  clearCanvas()
  // 3. volvemos a pintar
  p1.draw()
  // printElements()
  // 4. repetimos
  // Forma2 => setTimeout(update, 1000 / 60)
  requestAnimationFrame(update)
}

function changeState() {
  y1 += 1
  y2 += 3
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

function printElements() {
  ctx.fillRect(20, y1, 100, 100)
  ctx.fillRect(200, y2, 100, 100)
}

// setInterval(update, 1000 / 60)
// Forma 2 => setTimeout(update, 1000 / 60)
update()

document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 38:
      // up
      p1.moveUp()
      break
    case 37:
      // left
      p1.moveLeft()
      break
    case 39:
      //right
      p1.moveRight()
      break
    case 40:
      //down
      p1.moveDown()
      break
    default:
      break
  }
})
