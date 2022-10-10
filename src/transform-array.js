const {NotImplementedError} = require('../extensions/index.js');

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
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
    const newArr = [...arr]
    const func = {
        '--discard-next'(idx) {
            newArr.splice(idx, 2, undefined)
        },
        '--discard-prev'(idx) {
            if (idx === 0) newArr.splice(idx, 1, undefined)
            else newArr.splice(idx - 1, 2,)
        },
        '--double-next'(idx) {
            newArr.splice(idx, 1, newArr[idx + 1])
        },
        '--double-prev'(idx) {
            newArr.splice(idx, 1, newArr[idx - 1])
        },
    }
    for (let i = 0; i < newArr.length; i++) {
        if (func.hasOwnProperty(newArr[i])) func[newArr[i]](i)
    }
    return newArr.filter(el => el !== undefined)
}

module.exports = {
    transform
};
