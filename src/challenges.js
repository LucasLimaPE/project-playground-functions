// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === ture) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
/* Para resolver este desafio foi usado a função encontrada em:(https://blog.betrybe.com/javascript/javascript-split/) */

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let itemsTogether = lastItem + ', ' + firstItem;
  return itemsTogether;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
