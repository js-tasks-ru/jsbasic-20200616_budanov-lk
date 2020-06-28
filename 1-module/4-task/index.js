/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowString = str.toLowerCase();
  return lowString.includes('1xbet') || lowString.includes('xxx');
}
checkSpam ('1XbeT now');
checkSpam ('free xxxxx');
checkSpam ('innocent rabbit');