'use strict'

const height = window.innerHeight
const width = window.innerWidth

function getArrayOfNumbers() {
  let n
  if (width >= 1023) n = 40
  if (width < 1023) n = 30
  if (width < 767) n = 20
  if (width < 400) n = 15
  const arrayOfNumbers = [...new Array(Math.floor(height / n))]
  return arrayOfNumbers
}

function getArrayOfArrays() {
  let n
  if (width >= 1023) n = 40
  if (width < 1023) n = 30
  if (width < 767) n = 20
  if (width < 400) n = 15
  const arrayOfArrays = [...new Array(Math.floor(width / n))]
  return arrayOfArrays
}

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10)
  return randomNumber
}

function createArray() {
  const array = document.createElement('div')
  array.classList.add('array')
  getArrayOfNumbers().forEach(() => {
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
    time = Math.floor(Math.random() * 4000 + 2500)
    delay = Math.floor(Math.random() * 150 + 50)
    transitionDelay = Math.floor(Math.random() * 1000 + 200)
  }, time)

  const numbers = array.childNodes

  for (let i = 0; i < numbers.length; i++) {
    function go() {
      const interval = setInterval(() => {
        one()

        function one() {

          const timeout = setTimeout(() => {
            numbers[i].style.color = `rgb(100, 255, 100)`
            numbers[i].style.textShadow = `0 0 5px greenyellow`
            numbers[i].style.transition = '0s'
            numbers[i].textContent = getRandomNumber()
            clearTimeout(timeout)
            two()
          }, i * delay)

        function two() {

          const timeout3 = setTimeout(() => {
            numbers[i].style.textShadow = 'none'
            numbers[i].style.color = 'rgb(40, 255, 40)'
            clearInterval(timeout3)
          }, delay)

          const timeout2 = setTimeout(() => {
            numbers[i].style.transition = `color ${transitionDelay}ms linear`
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

