// const $header = document.querySelector("#title")
// const $list = document.querySelector("#list")

// setTimeout(() => {
//   $header.id = "header"
// }, 2000)

// const mice = document.querySelectorAll(".mouse")

// mice[0].className += " cat"
// console.log(mice[0].classList)

// mice[0].classList.remove("cat")
// mice[0].classList.add("ratoncito")

// console.log(mice[0].classList[1])

// // console.log(mice)

// // setTimeout(() => {
// //   $header.innerText = "Joss"
// // }, 3000)

// // $header.style.color = "crimson"
// // $header.style.border = "2px solid black"

// // console.log($list.innerHTML)

// // const arr = [1, 2, 3]

// arr.forEach(element => {
//   $list.innerHTML += `<li>element ${element}</li>`
// })

// // const listItems = $list.querySelectorAll("li")

// // console.log(listItems)

/////////////////

// const $anchor = document.querySelector("#google-link")

// $anchor.setAttribute("ok", "yolo")

// console.log($anchor)
// const $body = document.querySelector("body")
// const $h2 = document.createElement("h2")
// const $content = document.querySelector("#content")
// const $title = document.querySelector("#title")

// const h2text = document.createTextNode("Contenido")

// $h2.appendChild(h2text)

// // $h2.innerText = "Contenido"

// $body.appendChild($h2)

// $content.removeChild($title)

const $button = document.querySelector("#add-item-button")
const $list = document.querySelector("#item-list")
const $input = document.querySelector("#new-element")

let qty = 1

$button.onclick = function () {
  const $li = document.createElement("li")
  $li.innerText = $input.value
  $list.appendChild($li)
  qty++
  $input.value = ""
}
