let button = document.querySelector('#btn')
let numeroSorteado = document.querySelector('#resultado')
let jogo = []

function clear() {
  numeroSorteado.innerHTML = ''
}


function createNumber() {
  for (let i = 0; i < 6; i++) {
    let numeroSorteado = Math.floor(Math.random() * 5 + 1);

    while (jogo.includes(numeroSorteado)) {
      numeroSorteado = Math.floor(Math.random() * 5 + 1);
    }
  }
  numeroSorteado.innerHTML = Math.floor(80 * Math.random() + 1)
}


createNumber()
clear()

button.addEventListener('click', createNumber)


