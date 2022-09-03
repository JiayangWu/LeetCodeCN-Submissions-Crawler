/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return n%2?'a'.repeat(n):('a'.repeat(n-1)+'b');
};