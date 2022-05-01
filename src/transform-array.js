const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arrCopy = arr.slice();
  let tempArr = [];
  for (let index = 0; index < arrCopy.length; index++) {
    switch (arrCopy[index]) {
      case '--discard-next':
        if (typeof arrCopy[index + 1] === 'undefined') {
          arrCopy.splice(index, 1);
        } else {
          tempArr.push(arrCopy[index + 1]);
          arrCopy.splice(index + 1, 1);
          arrCopy.splice(index, 1);
          index = index - 1;
        }
        break;
      case '--discard-prev':
        if (index === 0 || tempArr.length !== 0) {
          arrCopy.splice(index, 1);
        } else {
          arrCopy.splice(index - 1, 2);
        }
        break;
      case '--double-next':
        if (typeof arrCopy[index + 1] === 'undefined') {
          arrCopy.splice(index, 1);
        } else {
          arrCopy[index] = arrCopy[index + 1];
        }
        break;
      case '--double-prev':
        if (index === 0 || tempArr.length > 0) {
          arrCopy.splice(index, 1);
        } else {
          arrCopy[index] = arrCopy[index - 1];
        }
        break;
      default:
        break;
    }
  }
  return arrCopy;
}
module.exports = {
  transform,
};
