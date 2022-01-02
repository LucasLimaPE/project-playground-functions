// Desafio 1
// Algoritmo:
// 1 - Declara a função (compareTre) e abre-se o primeiro bloco de código;
// 2 - Declara-se uma condicional que irá comparar se o (valor1) e o (valor2) tem seus respectivos valores como true, se sim, o retorno da função sera true, se não, o retorno da função será false.

function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
// Algoritmo:
// 1 - Declara-se uma função que irá receber como paraâmetro dois valores (base) e (height), abre-se o bloco de código;
// 2 - Declara-se o retorno da função sendo o calculo da área do triângulo ((base*height) /2)), fecha-se o bloco de código.

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Algoritmo:
// 1 - Declara-se a função (splitSetence) que receberá como parâmetro uma string e abre-se o bloco de código;
// 2 - Declara-se como retorno da função a string adicionada do método split, que irá separar está string onde houver a ocorrência do que foi passado como parâmetro no método, neste caso o espaço (' '), formando um array com o resultado do método. Fecha-se o bloco de código.
/* Para resolver este desafio foi usado o método encontrado em:(https://blog.betrybe.com/javascript/javascript-split/) */
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
// Algoritmo:
// 1 - Declara-se uma função (concatName) que receber=a como parâmetro um array, abre-se o bloco de código;
// 2 - Declara-se uma variável (firstItem) que irá conter a primeira posição do array;
// 3 - Declara-se uma variável (lastItem) que irá conter a última posição do array;
// 4 - Declara-se a variável (itemsTogrther) que irá concatenar a última posição do array (lastItem) com a vírgula e o espaço (', ') e a primeira posição do array (firstItem);
// 5 - Declara-se como retorno da função a variável (itemsTogether) um template string que irá que irá permitir a expressão imbutida para concatenação dos valores, os valores dentro do template string estão dentro de placeholders (${}) que é responsável por pegar o valor da variável dentro dele.
/*
Pesquisas feitas em:

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
https://www.tutorialsandyou.com/javascript/what-is-dollar-sign-and-curly-braces-in-javascript-3.html */

function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let itemsTogether = `${lastItem}, ${firstItem}`;
  return itemsTogether;
}

// Desafio 5
// Algoritmo:
// 1 - Declara-se a função footballPoints, que recebe como parâmetro wins e ties, abre-se o bloco de código;
// 2 - Declara-se o retorno da fnção sendo o parâmetro wins multiplicado por 3 somado de ties.

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
// Algoritmo:
// 1 - Declara-se uma função (highestCout) que receberá como parâmetro uma matriz (array de números) e abre-se o primeiro o primeiro bloco código;
// 2 - Declara-se uma variável (higherNumber), tendo seu valor inicial como a primeira posição da matriz (matriz[0]);
// 3 - Declara-se uma variável (higestNumberRepetitions) tendo seu valor incial 0;
// 4 - Declara-se o primeiro for que irá percorrer o array buscando o maior número dentro dele;
// 5 - Declara-se o segundo for que irá contar as repetições do maior número achado no primeiro for.
// 6 - Declara-se o retorno da função sendo o valor da variável (higestNumberRepetitions).

function highestCount(matriz) {
  let higherNumber = matriz[0];
  let higestNumberRepetitions = 0;
  for (let i = 0; i <= matriz.length - 1; i += 1) {
    if (matriz[i] > higherNumber) {
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
