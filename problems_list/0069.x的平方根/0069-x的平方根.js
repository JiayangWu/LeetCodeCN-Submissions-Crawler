/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans=0;
    for(let i=1; i<=x; i++){
        if(i>x/i) break;
        ans=i;
    }
    return ans;
};