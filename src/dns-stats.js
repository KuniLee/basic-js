const {NotImplementedError} = require('../extensions/index.js');

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
    const map = {}
    const domainsReversed = domains.map(el => el.split(".").reverse())
    for (const domains of domainsReversed) {
        for (let i = 0; i < domains.length; i++) {
            const dns = "." + domains.slice(0, i+1).join(".")
            if (map.hasOwnProperty(dns)) map[dns]++
            else map[dns] = 1
        }
    }
return map
}

module.exports = {
    getDNSStats
};
