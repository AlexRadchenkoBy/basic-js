const { NotImplementedError } = require('../lib');

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
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let additionStr = '';
  if (addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionStr += addition;
      if (i < additionRepeatTimes - 1) {
        additionStr += additionSeparator;
      }
    }
  }

  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += String(str) + additionStr;
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
