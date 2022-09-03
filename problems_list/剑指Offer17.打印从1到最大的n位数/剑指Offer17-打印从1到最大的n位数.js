/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let end=Math.pow(10, n)-1;
    let ans=[];
    for(let i=1; i<=end; i++) ans.push(i);
    return ans;
};