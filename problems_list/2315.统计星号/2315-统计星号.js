/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let strs=s.split('|');
    let n=strs.length;
    let ans=0;
    for(let i=0; i<n; i++){
        if(i%2===1) continue;
        for(let ch of strs[i]){
            if(ch==='*'){
                ans++;
            }
        }
    }
    return ans;
};