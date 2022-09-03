/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let n=s.length, ans=0;
    for(let i=0; i<n;){
        if(s[i]==='X'){
            ans++;
            i+=3
        }else{
            i++;
        }
    }
    return ans;
};