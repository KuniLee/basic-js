const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
return (typeof sampleActivity === 'string' && sampleActivity <= 15 && sampleActivity > 0)  ?
    Math.ceil(Math.log2(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD) || false :
    false
}

module.exports = {
  dateSample
};
