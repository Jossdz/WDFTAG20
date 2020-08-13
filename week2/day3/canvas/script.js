const canvas = document.querySelector("canvas")
const $button = document.querySelector("button")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "#31dafb"
ctx.strokeStyle = "rgb(23,0,222)"
//            x    y    w    h
// ctx.strokeRect(100, 100, 100, 100)
// ctx.clearRect(150, 150, 50, 50)

// ctx.beginPath()

// ctx.moveTo(10, 10)
// ctx.lineTo(290, 10)
// ctx.lineTo(290, 290)
// // ctx.lineTo(10, 290)

// ctx.fill()

// ctx.closePath()

// ctx.fillStyle = "#BADA55"

// ctx.beginPath()

// ctx.moveTo(10, 10)
// ctx.lineTo(10, 290)
// ctx.lineTo(290, 290)

// ctx.fill()

// ctx.closePath()

// ctx.fillStyle = "rgba(100,200,0, 0.2)"

// ctx.beginPath()
// ctx.arc(150, 150, 50, (Math.PI / 180) * 30, (Math.PI / 180) * 330)
// ctx.lineTo(150, 150)
// ctx.fill()

// ctx.fillStyle = "black"
// ctx.font = "30px VT323"
// ctx.fillText("Game Over", 30, 50)
const kirbyImage = new Image()
kirbyImage.src =
  "https://images.wikidexcdn.net/mwuploads/esssbwiki/0/07/latest/20180613002925/Kirby_SSBU.png"

function draw(x = 0, y = 0) {
  if (x > canvas.width + 100) x = -100
  ctx.fillStyle = "green"

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // creates rectangle => ctx.fillRect(x, y, width, height);
  ctx.drawImage(kirbyImage, x, 0, 100, 100)
  x += 3

  // calls itself every 30ms
  setTimeout(`draw(${x}, ${y})`, 80)
}

$button.onclick = () => draw()
