const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let compressed = '';
  let arr = str.split('');
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else if (counter === 1) {
      compressed += arr[i];
    } else {
      compressed = compressed + counter + arr[i];
      counter = 1;
    }
  }
  return compressed;
}

module.exports = {
  encodeLine,
};
