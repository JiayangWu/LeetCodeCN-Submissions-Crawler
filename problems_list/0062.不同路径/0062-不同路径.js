/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp=new Array(m).fill(0).map(x=>new Array(n).fill(0));
    for(let i=0; i<n; i++) dp[0][i]=1;
    for(let i=0; i<m; i++) dp[i][0]=1;
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};