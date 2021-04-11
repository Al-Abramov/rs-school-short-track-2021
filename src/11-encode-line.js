/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num++;
    } else if (num === 0) {
      newStr += str[i];
    } else {
      newStr += (num + 1) + str[i];
      num = 0;
    }
  }
  return newStr;
}

module.exports = encodeLine;
