const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let A = parseFloat(sampleActivity);
  if (typeof A !== 'number' || A <= 0 || A > 15 || isNaN(A)) {
    return false;
  }
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / A) / (k / HALF_LIFE_PERIOD));
  return result;
}

module.exports = {
  dateSample,
};
