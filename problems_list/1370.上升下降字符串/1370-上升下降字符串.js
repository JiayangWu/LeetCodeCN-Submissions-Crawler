/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let n=s.length;
    let cnts=new Array(26).fill(0);
    for(let i=0; i<n; i++){
        let idx=s[i].charCodeAt()-'a'.charCodeAt();
        cnts[idx]++;
    }

    let ans="";
    while(n){
        for(let i=0; i<26; i++){
            if(cnts[i]>0){
                ans+=String.fromCharCode(97+i);
                cnts[i]--;
                n--;
            }
        }

        for(let i=25; i>=0; i--){
            if(cnts[i]>0){
                ans+=String.fromCharCode(97+i);
                cnts[i]--;
                n--;
            }
        }
    }
    return ans;
};