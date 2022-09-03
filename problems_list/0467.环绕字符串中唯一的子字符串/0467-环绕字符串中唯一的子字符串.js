/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    let dp=new Array(26).fill(0);
    let k=0;
    for(let i=0; i<p.length; i++){
        if(i>0 && (p.charCodeAt(i)-p.charCodeAt(i-1)+26)%26===1){
            k++;
        }else{
            k=1;
        }
        dp[p.charCodeAt(i)-'a'.charCodeAt()]=Math.max(dp[p.charCodeAt(i)-'a'.charCodeAt()], k);
    }
    return _.sum(dp);
};