const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    if (typeof arguments[1] === 'undefined') {
      arguments[1] = 1;
    }
    const result = array.findIndex((element) => Array.isArray(element));
    if (result !== -1) {
      return this.calculateDepth(array.flat(), (arguments[1] += 1));
    }
    return arguments[1];
  }
}

module.exports = {
  DepthCalculator,
};
