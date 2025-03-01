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
  const obj = {};
  let str = '';
  const arrSplit = domains.map((elem) => elem.split('.').reverse());

  for (let i = 0; i < arrSplit.length; i++) {
    str = '';
    for (let j = 0; j < arrSplit[i].length; j++) {
      str += `.${arrSplit[i][j]}`;

      if (obj[str] === undefined) {
        obj[str] = 1;
      } else {
        obj[str] += 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
