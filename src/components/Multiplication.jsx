import React from "react";
import PropTypes from "prop-types";

const Multiplication = ({ multiplicand, multiplier, result, expanded }) => {
  if (expanded) {
    return (
      <table className="multiplication expanded">
        <tbody>
          <tr>
            <td>{multiplicand}</td>
          </tr>
          <tr>
            <td>X{multiplier}</td>
          </tr>
          {multiplier
            .toString()
            .split("")
            .map(() => (
              <tr>
                <td />
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

  return (
    <span className="multiplication inline">
      {multiplicand} X {multiplier} = {result ? `____${result}____` : "_________"}
    </span>
  );
};

Multiplication.propTypes = {
  multiplicand: PropTypes.number.isRequired,
  multiplier: PropTypes.number.isRequired,
  result: PropTypes.number,
  expanded: PropTypes.bool,
};

Multiplication.defaultProps = {
  result: null,
  expanded: false,
};

export default Multiplication;
