/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let arr = (x+'').split('').reverse().join('');
    return x == arr
};