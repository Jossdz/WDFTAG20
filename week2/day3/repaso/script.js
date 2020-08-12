// const $button1 = document.querySelector(".btn")
// const $button2 = document.querySelector(".btn:nth-child(2)")
// const $button = document.querySelectorAll(".btn")
// const $buttons = document.getElementsByClassName("btn")

// const arr = [...$buttons]

// arr.forEach(element => {
//   element.classList.remove("active")
// })

// opcion 1
// $button1.addEventListener("click", () => {
//   if ($button1.classList.contains("active")) {
//     $button1.classList.remove("active")
//   } else {
//     $button1.classList.add("active")
//   }
// })

// // opcion 2
// $button2.onclick = () => {
//   if ($button2.classList.contains("active")) {
//     $button2.classList.remove("active")
//   } else {
//     $button2.classList.add("active")
//   }
// }

// // class Character {
//   constructor() {
//     this.x = 0
//   }
//   moveLeft() {
//     this.x--
//   }
//   moveRight() {
//     this.x++
//   }
// }

// const character = new Character()

// --------------------------------

const $purpleBtn = document.querySelector("#purple")
const $redBtn = document.querySelector("#red")
const $peruBtn = document.querySelector("#peru")
const articles = document.querySelectorAll("article")

$purpleBtn.onclick = () => {
  articles.forEach(article => {
    article.style.backgroundColor = "purple"
  })
}
$redBtn.onclick = () => {
  articles.forEach(article => {
    article.style.backgroundColor = "crimson"
  })
}
$peruBtn.onclick = () => {
  articles.forEach(article => {
    article.style.backgroundColor = "peru"
  })
}
