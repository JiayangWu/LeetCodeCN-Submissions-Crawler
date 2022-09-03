/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let ans=[], perm=[];
    let visit=new Array(s.length).fill(0);
    s=s.split('').sort().join('');
    const allPerm=function(n){
        if(perm.length===n){
            ans.push([...perm].join(''));
            return;
        }

        for(let i=0; i<n; i++){
            if(visit[i]) continue;
            if(i>0 && s[i-1]===s[i] && !visit[i-1]) continue;
            perm.push(s[i]);
            visit[i]=1;
            allPerm(n);
            visit[i]=0;
            perm.pop();
        }
    }
    allPerm(s.length);
    return ans;
};