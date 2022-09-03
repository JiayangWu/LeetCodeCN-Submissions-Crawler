/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let arr=new Array(n+1).fill(0);
    for(let i=1; i<=n; i++){
        let mn=Infinity;
        for(let j=1; j*j<=i; j++){
            mn=Math.min(mn, arr[i-j*j]);
        }
        arr[i]=mn+1;
    }
    return arr[n];
};