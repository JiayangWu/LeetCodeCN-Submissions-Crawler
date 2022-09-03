/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x===1) return 1;

    let res=1;
    if(n<0){
        n=Math.abs(n);
        x=1/x;
    }
    // console.log(n);
    while(n){
        if(n&1) res*=x;
        x*=x;
        n=Math.floor(n/2);
    }
    return res;
};