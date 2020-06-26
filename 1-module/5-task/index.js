/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  return (str.length> maxlength) ?
  str.slice(0, maxlength - 1) + "…" : str;
}
let string1 = truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
let string2 = truncate('Всем привет!', 20);

