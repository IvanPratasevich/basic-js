const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfNums = Array.from(String(n), Number);
  arrayOfNums = arrayOfNums.map(String);
  let result = [];
  let maxNum;
  arrayOfNums.forEach((el, index) => {
    let temp = arrayOfNums.slice();
    temp.splice(index, 1);
    result.push(Number(temp.join('')));
  });
  maxNum = result.sort((a, b) => {
    return b - a;
  });
  return maxNum[0];
}

module.exports = {
  deleteDigit,
};
