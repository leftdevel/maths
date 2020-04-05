class Multiplication {
  multiplicand = 0;

  multiplier = 0;

  result = 0;

  constructor({ multiplicand, multiplier }) {
    this.multiplicand = multiplicand;
    this.multiplier = multiplier;
  }

  getExpression() {
    return `${this.multiplicand} X ${this.multiplier} = `;
  }

  resolve() {
    this.result = this.multiplicand * this.multiplier;
  }

  hasResult() {
    return this.result > 0;
  }
}

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

export default {
  generateListForNumber,
  shuffleList,
};
