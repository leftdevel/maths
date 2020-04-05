import Multiplication from "../model/Multiplication";

export function generateListForNumber(multiplicand) {
  const result = [];

  for (let i = 1; i <= 10; i += 1) {
    result.push(new Multiplication({ multiplicand, multiplier: i }));
  }
}

export function shuffleList(list) {
  const shuffled = [...list];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function generate(multiplicandDigits, multiplierDigits) {
  const multiplicand = Math.floor(Math.random() * (10 ** multiplicandDigits));
  const multiplier = Math.floor(Math.random() * (10 ** multiplierDigits));

  return new Multiplication({ multiplicand, multiplier });
}



export default {
  generateListForNumber,
  shuffleList,
  generate,
};
