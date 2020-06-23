/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let name = ucFirst('вася');
let name2 = ucFirst('в');
let emptyName = ucFirst('');

