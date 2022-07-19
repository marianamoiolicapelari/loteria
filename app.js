let numbersDrawn = document.querySelector('#resultado')
let button = document.querySelector("button");

function draw() {

  return Math.round(Math.random() * 79) + 1;

}

function drawNumbers() {

  let quina = [];
  let number = 1;
  let maximumAmountOfNumbers = 5;

  while (number <= maximumAmountOfNumbers) {

    let numbersDrawn = draw();
    let found = false;

    for (position = 0; position < quina.length; position++) {

      if (quina[position] == numbersDrawn) {

        found = true;
        break;
      }
    }

    if (found == false) {

      quina.push(numbersDrawn);
      number++;
    }

  }

  quina.sort(function (a, b) { return a - b });
  numbersDrawn.innerHTML = quina.join(' - ');
}

button.addEventListener('click', drawNumbers)
