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
// Algoritmo:
// 1 - Declara-se uma função (catAndMouse) que receberá como parâmetro as posições de (mouse), (cat1) e (cat2), e irá retornas qual dos fatos irá alcançar o rato primeiro, abre-se o primeiro bloco de código;
// 2 - Declara-se uma variável (distanceFronCat1) que terá como valor a diferença entre o (cat1) e o (mouse);
// 3 - Declara-se uma variável (distanceFromCat2) que terá como valor a diferença entre (cat2) e (mouse);
// 4 - Declara-se uma estrutura condicional que irá comparar usando o método [(Math.abs()) que retorna o valor absoluto, ou seja, o valor do módulo do valor que for passado como parâmetro] se (distanceFronCat1) é maior que (distanceFromCat2), se sim, abrir-se-á um bloco de código que dará como retorno da função [('cat2'), declarando o que (cat2) está mais próximo de (mouse). Atenta-se que aqui é uma string e não o valor em sí de (cat2)].
// 5 - Declara-se um segundo if que irá comparar se (distanceFromCat2) é maior que (distanceFromCat1), se sim, abrir-se-á um bloco que dará como retorno da função a string ('cat2'), declarando que (cat1) está mais próximo de (mouse);
// 6 - Declara-se um terceiro if que irá comparar se (distanceFromCat1) é igual a (distanceFromCat2), se sim, abrir-se-á um bloco de código que dará como retorno da função a string ('os gatos trombam e o rato foge'), declarando que a distânc

/* O método usado para resolver este desafio foi sugerido por um colega em uma thread no Slack e encontrada em:
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

Pesquisas feitas em:

https://www.devmedia.com.br/matematica-em-javascript-o-objeto-math/27439

https://4anoilha.blogs.sapo.pt/o-que-e-valor-absoluto-e-valor-relativo-6338
*/

function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1 = cat1 - mouse;
  let distanceFromCat2 = cat2 - mouse;

  if (Math.abs(distanceFromCat1) > Math.abs(distanceFromCat2)) {
    return 'cat2';
  } if (Math.abs(distanceFromCat2) > Math.abs(distanceFromCat1)) {
    return 'cat1';
  } if (Math.abs(distanceFromCat1) === Math.abs(distanceFromCat2)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// Algoritmo:
// 1 - Declara-se uma função fizzBuzz que receberá como parâmetro um array de números (matrizNumbers) e abre-se o bloco de código;
// 2 - Declara-se uma varíavel contendo um array vazio que irá conter os valores adicionados nas condicionais feitas no próximo passo;
// 3 Declarase um for que irá percorres todas as posições do array dado como parâmetro e abre-se o segundo bloco de código;
// 4 - Declara-se um if que irá verificar se a divisão por 3 do número percorrido é exata e se a divisão deste mesmo número  por 5 também é exata, se sim abrir-se-á um bloco de código que adicionar-a a string ('fizzBuzz') à variável (numbersMatriz);
// 5 - Declara-se um else if que irá verificar se a divisão do número percorrido por 3 não é exata e se a divisão deste mesmo número por 5 também não é exata, se sim, abrir-se-á um bloco de código que adicionará a string ('bud!') à variável (numbersMatriz);
// 6 - Declara-se um else if que irá verificar se a divisão do número percorrido por 3 é exata, se sim, irá abrir um bloco de código onde o a string ('fizz') será adicionada à variável (numbersMatriz);
// 7 - Declara-se um else if que irá verificar se a divisão do número percorrido por 5 é exata, se sim, irá abrir um bloco de código que irá adicionar a string ('buzz') à variável (numbersMatriz);
// 8 - Declara-se como retorno da função a variável (numbersMatriz).

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
