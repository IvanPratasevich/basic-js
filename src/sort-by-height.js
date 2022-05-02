const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrCopy = arr.slice();
  let sortArr = arrCopy.sort(function (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });
  let arrFilter = sortArr.filter((element) => element != -1);
  let result = [];
  let counter = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === -1) {
      result.push(-1);
    } else {
      result.push(arrFilter[counter]);
      counter++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight,
};
