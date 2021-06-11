document.getElementById('button').addEventListener('click', calculate)

let num1 = 0
let num2 = 0
let counter = 0
let answer = 0
let negative = false

function calculate () {
  num1 = document.getElementById('input1').value
  num2 = document.getElementById('input2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  answer = 0
  negative = false

  if (num1 < 0) {
    negative = !negative
    num1 = Math.abs(num1)
  }

  if (num2 < 0) {
    negative = !negative
    num2 = Math.abs(num2)
  }

  for (counter = 0; counter < num1; counter++) {
    answer = answer + num2
  }

  if (negative) {
    answer = 0 - answer
  }
  alert(answer)
}
