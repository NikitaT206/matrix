'use strict'

const height = window.innerHeight
const width = window.innerWidth

const arrayOfSymbols = ["!", "#", '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ';', ':', '<', '=', '>', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', ']', '^', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '}', '|', '~' ]

function getArrayOfSymbols() {
  let n
  if (width > 1023) n = 35
  if (width >= 768) n = 25
  if (width <= 767) n = 20
  const arrayOfNumbers = [...new Array(Math.floor(height / n))]
  return arrayOfNumbers
}

function getArrayOfArrays() {
  let n
  if (width >= 1023) n = 40
  if (width < 1023) n = 30
  if (width < 767) n = 24
  const arrayOfArrays = [...new Array(Math.floor(width / n))]
  return arrayOfArrays
}

function getRandomSymbol() {
  let randomSymbol = arrayOfSymbols[Math.floor(Math.random() * arrayOfSymbols.length - 1)]
  return randomSymbol
}

function createArray() {
  const array = document.createElement('div')
  array.classList.add('array')
  getArrayOfSymbols().forEach(() => {
    const number = document.createElement('div')
    number.classList.add('number')
    array.prepend(number)
  })
  return array
}

function createArrayOfArrays() {
  getArrayOfArrays().forEach(() => {
    document.body.insertAdjacentHTML('afterbegin', createArray().outerHTML)
  })
}

createArrayOfArrays()

const arrays = document.querySelectorAll('.array')

arrays.forEach((array) => {
  let time = Math.floor(Math.random() * 4000)
  let delay = Math.floor(Math.random() * 150 + 50)
  let transitionDelay = Math.floor(Math.random() * 10)

  setInterval(() => {
    time = Math.floor(Math.random() * 6000 + 3000)
    delay = Math.floor(Math.random() * 150 + 50)
    transitionDelay = Math.floor(Math.random() * 1500 + 200)
  }, time)

  const numbers = array.childNodes

  for (let i = 0; i < numbers.length; i++) {
    function go() {
      const interval = setInterval(() => {
        one()

        function one() {

          const timeout = setTimeout(() => {
            numbers[i].style.color = `#00ff2b`
            numbers[i].style.textShadow = `0 0 5px rgb(151, 255, 152)`
            numbers[i].style.transition = '0s'
            numbers[i].textContent = getRandomSymbol()
            clearTimeout(timeout)
            two()
          }, i * delay)

        function two() {

          const timeout3 = setTimeout(() => {
            numbers[i].style.textShadow = 'none'
            numbers[i].style.color = '#009a22'
            numbers[i].style.transition = `color .4s linear, text-shadow 100ms`
            clearInterval(timeout3)
          }, delay)

          const timeout2 = setTimeout(() => {
            numbers[i].style.transition = `color ${transitionDelay}ms linear, text-shadow 0ms`
            numbers[i].style.color = 'black'
            clearTimeout(timeout2)
          }, delay + 1000)
        }
      }

      clearInterval(interval)
      go()
      }, time)
    }
    go()
  }
})


