function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

function calcArea(base, height) {
  return (base * height) / 2;
}

function splitSentence(string) {
  return string.split(' ');
}

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

function highestCount(matriz) {
  const sortedMatriz = matriz.sort((a, b) => b - a);
  const filteredHighest = sortedMatriz.filter((item) => item === sortedMatriz[0]);
  return filteredHighest.length;
}

function catAndMouse(mouse, cat1, cat2) {
  const distanceFromCat1 = Math.abs(cat1 - mouse);
  const distanceFromCat2 = Math.abs(cat2 - mouse);

  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  } if (distanceFromCat2 < distanceFromCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

const fizzBuzzUtilities = {
  divisibleThreeAndFive(number) {
    return number % 3 === 0 && number % 5 === 0;
  },

  notDivisibleThreeAndFive(number) {
    return number % 3 !== 0 && number % 5 !== 0;
  },

  divisibleThree(number) {
    return number % 3 === 0;
  },

  divisibleFive(number) {
    return number % 5 === 0;
  },

  comparePush(number, array) {
    if (this.divisibleThreeAndFive(number)) {
      array.push('fizzBuzz');
    } else if (this.notDivisibleThreeAndFive(number)) {
      array.push('bug!');
    } else if (this.divisibleThree(number)) {
      array.push('fizz');
    } else {
      array.push('buzz');
    }
  },
};

function fizzBuzz(matrizNumbers) {
  const numbersMatriz = [];

  for (let number of matrizNumbers) {
    fizzBuzzUtilities.comparePush(number, numbersMatriz);
  }

  return numbersMatriz;
}

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
    } else {
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
