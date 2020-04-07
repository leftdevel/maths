export const Types = {
  MULTIPLICATION: "multiplication",
  DIVISION: "division",
};

export default class Statement {
  /**
   * baseNumber / dividend
   */
  baseNumber = 0;

  /**
   * Multiplier / divisor
   */
  modifier = 0;

  result = 0;

  constructor({ baseNumber, modifier, type }) {
    if ([Types.MULTIPLICATION, Types.DIVISION].indexOf(type) === -1) {
      throw new Error(`Invalid type. Got: ${type}`);
    }

    this.baseNumber = baseNumber;
    this.modifier = modifier;
    this.type = type;
  }

  isMultiplication() {
    return this.type === Types.MULTIPLICATION;
  }

  solve() {
    if (this.isMultiplication()) {
      this.result = this.baseNumber * this.modifier;

      return;
    }

    const result = this.baseNumber / this.modifier;

    this.result = result.toFixed(2);
  }

  hasResult() {
    return this.result > 0;
  }

  getId() {
    return `${this.baseNumber}_${this.modifier}`;
  }
}
