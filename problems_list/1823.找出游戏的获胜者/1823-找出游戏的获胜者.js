/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    var x=0;
    for(let i=2; i<=n; i++){
        x=(x+k)%i;
    }
    return x+1;
};