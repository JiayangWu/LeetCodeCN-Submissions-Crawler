/**
 * @param {string} s
 * @return {string}
 */
function expand(str, l, r){
    let n=str.length;
    while(l>=0 && r<=n-1 && str[l]===str[r]) l--, r++;
    return [l+1, r-1];
}

var longestPalindrome = function(s) {
    let n=s.length;
    let st=0, ed=0;
    for(let i=0; i<n; i++){
        let [st1, ed1]=expand(s, i, i);
        let [st2, ed2]=expand(s, i, i+1);
        if(ed1-st1>ed-st) st=st1, ed=ed1;
        if(ed2-st2>ed-st) st=st2, ed=ed2;
    }
    return s.substring(st, ed+1);
};