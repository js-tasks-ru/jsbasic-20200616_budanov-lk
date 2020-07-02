/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for( let prop in salaries) {
    if( isFinite(salaries[prop])) {
      sum += salaries[prop];
    };
  };
  return sum;
};

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

sumSalary(salaries);
