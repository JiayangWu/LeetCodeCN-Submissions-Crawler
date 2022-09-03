/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n=s.length;
    let low=0, high=n;
    let ans=[];
    for(let i=0; i<n; i++){
        if(s[i]=='I'){
            ans.push(low);
            low++;
        }else{
            ans.push(high);
            high--;
        }
    }
    ans.push(low);
    return ans;
};