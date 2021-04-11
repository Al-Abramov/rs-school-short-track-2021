/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = email.match(/([^@]+[a-z-0-9]+.[a-z-0-9]+$)/gi);
  return reg.join('');
}

module.exports = getEmailDomain;
