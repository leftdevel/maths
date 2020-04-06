import Multiplication from "../model/Multiplication";

function generateListForNumber(multiplicand) {
  const result = [];

  for (let i = 1; i <= 10; i += 1) {
    result.push(new Multiplication({ multiplicand, multiplier: i }));
  }

  return result;
}

function shuffleList(list) {
  const shuffled = [...list];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function generate(multiplicandDigits, multiplierDigits) {
  const multiplicand = Math.floor(Math.random() * (10 ** multiplicandDigits));
  const multiplier = Math.floor(Math.random() * (10 ** multiplierDigits));

  return new Multiplication({ multiplicand, multiplier });
}

/**
 *
 * @param {Array} list
 * @param {integer} solveCount
 */
function resolveListRandomly(list, solveCount) {
  let i = 0;

  while (i < solveCount) {
    const indexToSolve = Math.floor(Math.random() * list.length);

    const multiplication = list[indexToSolve];

    if (!multiplication.hasResult()) {
      multiplication.solve();
      i += 1;
    }
  }

  return list;
}

export default {
  generateListForNumber,
  shuffleList,
  generate,
  resolveListRandomly,
};
