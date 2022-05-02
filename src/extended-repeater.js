const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = '';
  let repeatTimes;
  let additionRepeatTimes;
  let additionSeparator;
  let separator;
  let strArr = '';
  if (!options.hasOwnProperty('repeatTimes')) {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }
  if (!options.hasOwnProperty('separator')) {
    separator = '+';
  } else {
    separator = options.separator;
  }
  if (options.hasOwnProperty('addition')) {
    for (let index = 0; index < additionRepeatTimes; index++) {
      let element = options.addition;
      if (index !== additionRepeatTimes - 1) {
        addition += `${element}${additionSeparator}`;
      } else {
        addition += `${element}`;
      }
    }
  }
  for (let index = 0; index < repeatTimes; index++) {
    if (index !== repeatTimes - 1) {
      strArr += `${str}${addition}${separator}`;
    } else {
      strArr += `${str}${addition}`;
    }
  }
  return strArr;
}
module.exports = {
  repeater,
};
