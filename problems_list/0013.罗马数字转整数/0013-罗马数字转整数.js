/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let mp=new Map();
    let chars=['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let radix=[1, 5, 10, 50, 100, 500, 1000];
    for(let i=0; i<7; i++) mp.set(chars[i], radix[i]);
    let ans=0;
    for(let st=0; st<s.length; ){
        if(st<s.length-1 && mp.get(s[st])<mp.get(s[st+1])){
            ans+=(mp.get(s[st+1])-mp.get(s[st]));
            st+=2;
        }else{
            ans+=mp.get(s[st]);
            st++;
        }
    }
    return ans;
};