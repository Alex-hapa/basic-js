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
  const newArr = arr.filter((value) => value >= 0).sort((num1, num2) => num1 - num2);
  return arr.map((value) => (value >= 0 ? newArr.shift() : value));
}

module.exports = {
  sortByHeight
};
