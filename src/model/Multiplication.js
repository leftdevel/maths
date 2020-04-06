export default class Multiplication {
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

  solve() {
    this.result = this.multiplicand * this.multiplier;
  }

  hasResult() {
    return this.result > 0;
  }

  getId() {
    return `${this.multiplicand}_x_${this.multiplier}`;
  }
}
