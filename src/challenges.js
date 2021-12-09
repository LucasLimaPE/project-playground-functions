// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
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
function highestCount(matriz) {
  let higherNumber = matriz[0];
  let higestNumberRepetitions = 0;
  for (let i = 0; i <= matriz.length - 1; i += 1) { if (matriz[i] > higherNumber) {
    higherNumber = matriz[i];
    }
  } 
  for (let i = 0; i <= matriz.length - 1; i += 1) {
    if (higherNumber === matriz[i]) {
      higestNumberRepetitions += 1;
    }
  }
  return higestNumberRepetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1 = cat1 - mouse;
  let distanceFromCat2 = cat2 - mouse;
  
  if (Math.abs(distanceFromCat1) > Math.abs(distanceFromCat2)) {
    return "cat2";
  } else if (Math.abs(distanceFromCat2) > Math.abs(distanceFromCat1)) {
    return "cat1";
  } else if (Math.abs(distanceFromCat1) === Math.abs(distanceFromCat2)) {
    return "os gatos trombam e o rato foge";
  }
}
/* A função usada para resolver este desafio foi sugerida por um colega e encontrada em: (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) */

// Desafio 8
function fizzBuzz(matrizNumbers) {
  let numbersMatriz = [];

  for (i = 0; i <= matrizNumbers.length - 1; i += 1) {
    if (matrizNumbers[i] % 3 === 0 && matrizNumbers[i] % 5 === 0) {
      numbersMatriz.push('fizzBuzz');
    } else if (matrizNumbers[i] % 3 !== 0 && matrizNumbers[i] % 5 !== 0) {
      numbersMatriz.push('bug!');
    } else if (matrizNumbers[i] % 3 === 0) {
      numbersMatriz.push('fizz');
    } else if (matrizNumbers[i] % 5 === 0) {
      numbersMatriz.push('buzz');
    }
  }
  return numbersMatriz;
}
  
// Desafio 9
function encode(string) {
  let exchangedLetters = '';
  for (let i = 0; i <= string.length - 1; i += 1) {
    if (string[i] === 'a') {
      exchangedLetters = 1;
    } else if (string[i] === 'e') {
      exchangedLetters = 2;
    } else if (string[i] === 'i') {
      exchangedLetters = 3;
    } else if (string[i] === 'o') {
      exchangedLetters = 4;
    } else if (string[i] === 'u') {
      exchangedLetters = 5;
    }else {
      exchangedLetters = string[i];
    }
  }
  return exchangedLetters;
}

function decode(string) {
  let exchangedNumbers = '';
  for (let i = 0; i <= string.length - 1; i += 1) {
    if (string[i] === 'a') {
      exchangedNumbers += 1;
    } else if (string[i] === 'e') {
      exchangedNumbers += 2;
    } else if (string[i] === 'i') {
      exchangedNumbers += 3;
    } else if (string[i] === 'o') {
      exchangedNumbers += 4;
    } else if (string[i] === 'u') {
      exchangedNumbers += 5;
    }
  }
  return exchangedNumbers;
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
