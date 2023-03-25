// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  const result = array.map((item) => ({ tech: item, name }));

  return result.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

const generatePhoneNumberUtilities = {
  makeNumber(array) {
    const numberTogether = array.join('');
    const prefix = numberTogether.slice(0, 2);
    const mainNumber = numberTogether.slice(2, 11);

    const result = `(${prefix}) ${mainNumber.slice(0, 5)}-${mainNumber.slice(5, 10)}`;

    return result;
  },

  countRepetitions(array) {
    const countObj = {};

    for (let element of array) {
      if (element in countObj) {
        countObj[element] += 1;
      } else {
        countObj[element] = 1;
      }
    }

    return Object.values(countObj);
  },
};

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (array.some((item) => item < 0 || item > 9)
  || generatePhoneNumberUtilities.countRepetitions(array).some((item) => item >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return generatePhoneNumberUtilities.makeNumber(array);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const lines = [lineA, lineB, lineC];

  const checkLines = lines.some((line) => {
    const otherLines = lines.filter((item) => item !== line);
    const otherLinesSum = otherLines[0] + otherLines[1];
    const absoluteValue = Math.abs(otherLines[0] - otherLines[1]);
    return line < otherLinesSum && line > absoluteValue;
  });
  return checkLines;
}

// Desafio 13
function hydrate(string) {
  const arrayNumbers = string.match(/\d+(\.\d+)?/g).map(Number);
  const soma = arrayNumbers.reduce((acc, currentValue) => acc + currentValue, 0);
  return soma > 1 ? `${soma} copos de água` : `${soma} copo de água`;
}

console.log(hydrate('1 cachaça, cervejas e  copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
