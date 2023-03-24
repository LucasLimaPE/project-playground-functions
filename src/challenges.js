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
  const letterMap = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return string.split('').map((char) => letterMap[char] || char).join('');
}

function decode(string) {
  const letterMap = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return string.split('').map((char) => letterMap[char] || char).join('');
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
