class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
        dp[1][1]=1;

        for(int i=2; i<=m; i++) dp[i][1]=dp[i][0]+dp[i-1][1];
        for(int j=2; j<=n; j++) dp[1][j]=dp[1][j-1]+dp[0][j];

        for(int i=2; i<=m; i++){
            for(int j=2; j<=n; j++){
                dp[i][j]=dp[i-1][j]+dp[i][j-1];
            }
        }
        return dp[m][n];
    }
};