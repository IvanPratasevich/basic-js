const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let domArr = [];
  let obj = {};
  domains.forEach((el) => domArr.push(el.split('.').reverse()));
  domArr.forEach((el1) => {
    el1.forEach((el2, index) => {
      let temp = [];
      for (let i = 0; i <= index; i++) {
        temp.push(el1[i]);
      }
      const tempWithDot = temp.map((x) => '.' + x);
      let str = '';
      tempWithDot.forEach((el3) => (str += `${el3}`));
      obj[str] ? obj[str]++ : (obj[str] = 1);
    });
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
