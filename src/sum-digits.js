const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrayOfNums = Array.from(String(n), Number);
  arrayOfNums = arrayOfNums.map(Number);
  const result = arrayOfNums.reduce((sum, el) => {
    return sum + el;
  }, 0);
  const resultSingleDigit = String(result).length;
  if (resultSingleDigit >= 2) {
    n = result;
    return getSumOfDigits(n);
  } else {
    return result;
  }
}

module.exports = {
  getSumOfDigits,
};
