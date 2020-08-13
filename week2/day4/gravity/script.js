const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")

let intevalId,
  friction = 0.8,
  gravity = 0.98,
  keys = [],
  platforms = []

platforms.push({
  x: $canvas.width - 170,
  y: 60,
  width: 100,
  height: 20
})

platforms.push({
  x: $canvas.width - 170,
  y: $canvas.height - 210,
  width: 100,
  height: 20
})

platforms.push({
  x: $canvas.width - 170,
  y: $canvas.height - 70,
  width: 100,
  height: 20
})

class Character {
  constructor(color) {
    this.x = 10
    this.y = 10
    this.width = 50
    this.height = 50
    this.velX = 0
    this.velY = 0
    this.speed = 5
    this.jumping = false
    this.jumpStrength = 17
    this.color = color
    this.grounded = false
  }
  draw() {
    //  Esto pasa si tocamos el piso
    if (this.y > $canvas.height - this.height) {
      this.y = $canvas.height - this.height
      this.jumping = false
    }
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  changePosition() {
    this.y += this.velY
    this.velY += gravity
    this.x += this.velX
    this.velX *= friction
  }
  jump() {
    if (!this.jumping) {
      this.velY = -this.jumpStrength
      this.jumping = true
    }
  }
}

const player = new Character("crimson")

function update() {
  clearCanvas()
  player.draw()
  player.changePosition()
  drawPlatforms()
  checkKeys()
  bounds()
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

intevalId = setInterval(update, 1000 / 60)

//-----------Respuesta al teclado-----------------------

function checkKeys() {
  if (keys[32] || keys[38]) {
    player.jump()
  }
  if (keys[37]) {
    player.velX--
  }
  if (keys[39]) {
    player.velX++
  }
}
// ---------Multiples teclas--------------

document.addEventListener("keydown", event => {
  keys[event.keyCode] = true
})
document.addEventListener("keyup", event => {
  keys[event.keyCode] = false
})
// -------------Plataformas y colision--------------
function drawPlatforms() {
  ctx.fillStyle = "#333333"
  platforms.forEach(platform => {
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
  })
}

function bounds() {
  player.grounded = false
  platforms.forEach(platform => {
    var direction = collisionCheck(player, platform)
    if (direction == "left" || direction == "right") {
      player.velX = 0
    } else if (direction == "bottom") {
      player.jumping = false
      player.grounded = true
    } else if (direction == "top") {
      player.velY *= -1
    }
  })

  if (player.grounded) {
    player.velY = 0
  }
}
// Colision para plataformas
function collisionCheck(char, plat) {
  var vectorX = char.x + char.width / 2 - (plat.x + plat.width / 2)
  var vectorY = char.y + char.height / 2 - (plat.y + plat.height / 2)

  var halfWidths = char.width / 2 + plat.width / 2
  var halfHeights = char.height / 2 + plat.height / 2

  var collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    var offsetX = halfWidths - Math.abs(vectorX)
    var offsetY = halfHeights - Math.abs(vectorY)
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left"
        char.x += offsetX
      } else {
        collisionDirection = "right"
        char.x -= offsetX
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top"
        char.y += offsetY
      } else {
        collisionDirection = "bottom"
        char.y -= offsetY
      }
    }
  }
  return collisionDirection
}
