const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
    if (typeof date === "undefined") return 'Unable to determine the time of year!'
    if (!(date instanceof Date && Date.prototype.toString == date.toString)) throw new Error("Invalid date!")

    const seasons = ["winter", "spring", "summer", "autumn"]

    let month = Number(date.getMonth())
    month = (month === 11) ? 0 : month + 1
    return seasons[Math.floor(month / 3)]
}


module.exports = {
    getSeason
};
