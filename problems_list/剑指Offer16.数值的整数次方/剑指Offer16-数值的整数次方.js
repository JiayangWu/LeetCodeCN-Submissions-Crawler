/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x===1) return 1;
    let neg=false;
    if(n<0) n=Math.abs(n), neg=true;
    // console.log(n);
    let ans=1, base=x;
    while(n){
        if(n&1) ans=ans*base;
        base=base*base;
        n=Math.floor(n/2);
    }
    return neg?1/ans:ans;
};