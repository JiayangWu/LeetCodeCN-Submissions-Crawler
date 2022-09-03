/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(s, p) {
    let n=s.length, m=p.length;
    s=' '+s, p=' '+p;
    let ne=new Array(m+1).fill(0);
    for(let i=2, j=0; i<=m; i++){
        while(j && p[i]!=p[j+1]) j=ne[j];
        if(p[j+1]===p[i]) j++;
        ne[i]=j;
    }

    for(let i=1, j=0; i<=n; i++){
        while(j && s[i]!=p[j+1]) j=ne[j];
        if(s[i]==p[j+1]) j++;
        if(j===m) return i-m;
    }
    return -1;
};