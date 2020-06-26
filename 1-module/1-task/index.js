/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let result = 1;
    while(n){
        result *= n--;
    }
    return result
}
let a = factorial(0);
let b = factorial(1);
let c = factorial(3);
let d = factorial(5);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

