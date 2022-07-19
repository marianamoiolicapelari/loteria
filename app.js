let numerosSorteados = document.querySelector('#resultado')
let button = document.querySelector("button");

function sorteia() {

  return Math.round(Math.random() * 79) + 1;

}

function sorteiaNumeros() {

  let megaSena = [];
  let numero = 1;
  let quantidadeMaximaDeNumeros = 5;

  while (numero <= quantidadeMaximaDeNumeros) {

    let numerosSorteados = sorteia();
    let achou = false;

    for (posicao = 0; posicao < megaSena.length; posicao++) {

      if (megaSena[posicao] == numerosSorteados) {

        achou = true;
        break;
      }
    }

    if (achou == false) {

      megaSena.push(numerosSorteados);
      numero++;
    }

  }

  megaSena.sort(function (a, b) { return a - b });
  numerosSorteados.innerHTML = megaSena.join(' - ');
}

button.addEventListener('click', sorteiaNumeros)
