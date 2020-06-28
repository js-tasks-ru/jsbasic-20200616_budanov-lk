/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  for ( let prop in obj) {
    return false;
  }
  return true;
}
let schedule = {};
isEmpty(schedule);
schedule["8:30"] = "подъём";
isEmpty(schedule);
