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
  const sortArr = [];

  const newArr = arr.filter((el) => el > 0).sort((a, b) => a - b);

  arr.forEach((element) => {
    if (element < 0) {
      sortArr.push(element);
    } else {
      sortArr.push(newArr[0]);
      newArr.splice(0, 1);
    }
  });
  return sortArr;
}

module.exports = sortByHeight;
