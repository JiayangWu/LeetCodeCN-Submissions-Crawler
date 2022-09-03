/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let ans=0;
    for(let i=0; i<strs[0].length; i++){
        for(let j=1; j<strs.length; j++){
            if(strs[j-1].charCodeAt(i)>strs[j].charCodeAt(i)){
                ans++;
                break;
            }
        }
    }
    return ans;
};