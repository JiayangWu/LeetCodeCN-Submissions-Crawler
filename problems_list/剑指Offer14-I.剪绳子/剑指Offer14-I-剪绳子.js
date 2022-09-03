/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if(n<=3) return n-1;
    let tn=Math.floor(n/3), tr=n%3;
    if(tr===1) tn--, tr=4;
    if(tr===0) tr=1;
    return Math.pow(3, tn)*tr;
};