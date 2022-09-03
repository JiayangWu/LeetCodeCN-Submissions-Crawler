/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let mp=new Map();
    for(let ch of s){
        let cnt=0;
        if(mp.has(ch)) cnt=mp.get(ch);
        mp.set(ch, cnt+1);
    }
    let ans=" ";
    // for(let ch of s){
    //     if(mp.get(ch)===1){
    //         ans=ch;
    //         break;
    //     }
    // }
    for(let [k, v] of mp){
        if(v===1){
            ans=k;
            break;
        }
    }
    return ans;
};