/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans="", isEnd=false;
    for(let i=0; i<strs[0].length; i++){
        let p=strs[0][i], isSame=true;
        for(let j=1; j<strs.length; j++){
            if(i>=strs[j].length){
                isEnd=true;
                break;
            } 
            if(p!==strs[j][i]){
                isSame=false;
                break;
            }
        }
        if(isEnd) break;
        if(isSame) ans+=p;
        else break;
    }
    return ans;
};