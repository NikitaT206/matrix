let width = window.innerWidth
let height = window.innerHeight

const arrayOfNumbers = [...new Array(Math.floor(height / 20))]
const arrayOfArrays = [...new Array(Math.floor(width / 10))]

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10)
  return randomNumber
}

function createArray() {
  const array = document.createElement('div')
  array.classList.add('array')
  arrayOfNumbers.forEach(() => {
    const number = document.createElement('div')
    number.classList.add('number')
    number.textContent = getRandomNumber()
    array.prepend(number)
  })
  return array
}

function createArrayOfArrays() {
  arrayOfArrays.forEach(() => {
    document.body.insertAdjacentHTML('afterbegin', createArray().outerHTML)
  })
}

createArrayOfArrays()

const arrays = document.querySelectorAll('.array')

arrays.forEach((array) => {
  let time = Math.floor(Math.random() * 10000 + 5000)
  let delay = Math.floor(Math.random() * 200 + 50)

  setInterval(() => {
    time = Math.floor(Math.random() * 10000 + 5000)
    delay = Math.floor(Math.random() * 100 + 40)
  }, time)

  const numbers = array.childNodes

  for (let i = 0; i < numbers.length; i++) {    
    setInterval(() => {
      setTimeout(() => {
        numbers[i].style.color = `rgb(100, 255, 100)`
        numbers[i].style.textShadow = `0 0 5px greenyellow`
        numbers[i].style.transition = 'color 0s'
        numbers[i].textContent = getRandomNumber()
        
        setTimeout(() => {
          numbers[i].style.textShadow = `none`
          numbers[i].style.color = `black`
          numbers[i].style.transition = 'color 1s linear'
        }, delay)
      }, i * delay)
    }, time)
  }
})












