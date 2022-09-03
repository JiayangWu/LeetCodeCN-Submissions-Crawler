/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let visit=new Array(m).fill(0).map(x=>new Array(false));
    var dfs=function(i, j, si, sj){
        if(i>=m || j>=n || k<si+sj || visit[i][j]) return 0;
        visit[i][j]=true;
        return 1+dfs(i+1, j, (i+1)%10!==0?si+1:si-8, sj)+dfs(i, j+1, si, (j+1)%10!==0?sj+1:sj-8);
    }
    return dfs(0,0,0,0);
};