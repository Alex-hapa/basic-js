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
  let maxValue = 0;
  [...String(n)].forEach((el, i, arr) => {
    let newarr = [...arr];
    newarr.splice(i, 1)
    if (newarr.join('') < maxValue) return;
    maxValue = parseInt(newarr.join(''), 10);
  });
  return maxValue;
}

module.exports = {
  deleteDigit
};
