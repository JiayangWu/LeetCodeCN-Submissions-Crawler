/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let vis=new Array(n+1).fill(0);
    let cnt=0;
    let ans='';
    function backtrack(idx, path){
        if(idx===n){
            cnt++;
            if(cnt===k){
                ans=path.join('');
            }
            return;
        }

        for(let i=1; i<=n; i++){
            if(vis[i]) continue;
            path.push(i);
            vis[i]=1;
            backtrack(idx+1, path);
            vis[i]=0;
            path.pop();
        }
    }
    backtrack(0, []);
    return ans;
};