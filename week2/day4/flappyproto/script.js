// const $canvas = document.createElement('canvas')
// const $body = document.querySelector('body')
// $canvas.width = 800
// $canvas.height = 400
// $body.append($canvas)
const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

let intervalId,
  frames = 0,
  score = 0,
  obstacles = []

class Character {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.color = color
    this.speedX = 0
    this.speedY = 0
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

class Obstacle extends Character {
  constructor(y, height) {
    super($canvas.width - 20, y, "green")
    this.width = 10
    this.height = height
  }
  draw() {
    ctx.fillStyle = this.color
    this.x--
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const cuadrito = new Character(20, 20, "rebeccapurple")

function update() {
  // 4 pasos para la actualizacion
  frames++
  clearCanvas()
  generateObstacles()
  checkCollitions()
  drawObstacles()
  printScore()
  cuadrito.draw()
  cuadrito.newPos()

  // console.log(cuadrito.speedX, cuadrito.speedY)
  // cuadrito.x++
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

intervalId = setInterval(update, 1000 / 60)

document.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case 38: // up arrow
      cuadrito.speedY -= 1
      break
    case 40: // down arrow
      cuadrito.speedY += 1
      break
    case 37: // left arrow
      cuadrito.speedX -= 1
      break
    case 39: // right arrow
      cuadrito.speedX += 1
      break
  }
})

document.addEventListener("keyup", e => {
  cuadrito.speedX = 0
  cuadrito.speedY = 0
})

function generateObstacles() {
  if (frames % 150 === 0) {
    let minHeight = 50
    let maxHeight = 250
    let minGap = 70
    let maxGap = 150
    let randomHeight = Math.floor(
      Math.random() * (maxHeight - minHeight) + minHeight
    )
    let randomGap = Math.floor(Math.random() * (maxGap - minGap) + minGap)
    obstacles.push(new Obstacle(0, randomHeight))
    obstacles.push(
      new Obstacle(
        randomHeight + randomGap,
        $canvas.height - randomGap - randomHeight
      )
    )
    // debugger
  }
}

function drawObstacles() {
  obstacles.forEach((obstacle, i) => {
    obstacle.draw()
    if (obstacle.x < 0) {
      obstacles.splice(i, 1)
    }
  })
}

function checkCollitions() {
  obstacles.forEach(obstacle => {
    if (cuadrito.isTouching(obstacle)) {
      clearInterval(intervalId)
      gameOver()
    }
  })
}

function gameOver() {
  ctx.fillStyle = "crimson"
  ctx.font = "40px Sans-serif"
  ctx.fillText("Game Over", 280, 260)
}

function printScore() {
  ctx.font = "20px Sans-serif"
  if (frames % 100 === 0) score++
  ctx.fillText(`Score: ${score}`, 700, 30)
}
