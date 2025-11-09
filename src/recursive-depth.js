const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (Array.isArray(item)) {
        const nestedDepth = this.calculateDepth(item);
        if (nestedDepth + 1 > depth) {
          depth = nestedDepth + 1;
        }
      }
    }

    return depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
