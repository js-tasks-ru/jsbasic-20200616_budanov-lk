/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let arr2 = arr.filter(item => item <= (a && b));
  return arr2;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
// console.log( filtered );
// console.log( arr );
