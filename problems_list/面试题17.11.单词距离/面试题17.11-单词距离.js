/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    let prev=0, idx1=-1, idx2=-1, ans=100010;
    for(let i=0; i<words.length; i++){
        let cur=0;
        if(words[i]===word1){
            idx1=i;
            cur=1;
        }else if(words[i]===word2){
            idx2=i;
            cur=2;
        }
        
        if(cur!==prev && (idx1!==-1 && idx2!==-1)) ans=Math.min(ans, Math.abs(idx1-idx2));
        prev=cur;
    }
    return ans;
};