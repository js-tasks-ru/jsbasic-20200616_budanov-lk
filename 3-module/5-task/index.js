/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(/,| /).map(item => +item).filter(item => +item).sort((a, b) => a - b);
  let result = {
      min: arr.shift(),
      max: arr.pop(),
  }
  return result;
}
let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
let inputData2 = '25,-1,-234,4,    1000';

getMinMax(inputData);
getMinMax(inputData2);