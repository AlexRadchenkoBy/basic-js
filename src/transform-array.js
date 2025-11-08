const { NotImplementedError } = require('../lib');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [...arr];
  const result = [];

  for (let i = 0; i < newArr.length; i++) {
    const current = newArr[i];

    if (current === '--discard-next') {
      if (i < newArr.length - 1) {
        newArr[i + 1] = undefined;
      }
    } else if (current === '--double-next')  {
      if (i < newArr.length - 1) {
        result.push(newArr[i + 1]);
      }
    } else if (current === '--discard-prev') {
      if (i > 0 && newArr[i - 1] !== undefined) {
        result.pop();
      }
    } else if (current === '--double-prev') {
    if (i > 0 && newArr[i - 1] !== undefined) {
      result.push(newArr[i - 1]);
      }
    } else if (current !== undefined) {
      result.push(current);
    }
  }
return result
}

module.exports = {
  transform
};
