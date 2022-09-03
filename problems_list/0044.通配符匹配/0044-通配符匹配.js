/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m=s.length, n=p.length;
    let dp=new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0));
    dp[0][0]=1;
    for(let i=1; i<=n; i++){
        if(p[i-1]=='*') dp[0][i]=1;
        else break;
    }

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(p[j-1]==='*'){
                dp[i][j]=dp[i][j-1]|dp[i-1][j];
            }else if(p[j-1]=='?' || s[i-1]==p[j-1]){
                dp[i][j]=dp[i-1][j-1];
            }
        }
    }
    return dp[m][n];
};