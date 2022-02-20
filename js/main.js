let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#subFour').addEventListener('click', sub4)
document.querySelector('#multTwo').addEventListener('click', mult2)
document.querySelector('#divTwo').addEventListener('click', div2)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub4() {
  total -= 4
  document.querySelector('#placeToPutResult').innerText = total
}

function mult2() {
  total *= 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function div2() {
  total /= 2
  document.querySelector('#placeToPutResult').innerHTML = total
}