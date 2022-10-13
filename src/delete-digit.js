const { NotImplementedError } = require('../extensions/index.js');
const common = require("mocha/lib/interfaces/common");

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
function deleteDigit( n ) {
const numbers = []
  const digits = n.toString().split("")
  for (let i = 0; i < digits.length; i++) {
    const arr = [...digits]
    arr.splice(i,1)
    numbers.push(+arr.join(""))
  }
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
