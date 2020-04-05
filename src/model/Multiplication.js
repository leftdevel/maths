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

  resolve() {
    this.result = this.multiplicand * this.multiplier;
  }

  hasResult() {
    return this.result > 0;
  }
}
