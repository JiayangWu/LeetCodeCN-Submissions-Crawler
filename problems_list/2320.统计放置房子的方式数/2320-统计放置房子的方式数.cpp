class Solution {
public:
    int countHousePlacements(int n) {
        vector<vector<int>> dp(n+1, vector<int>(2, 0));
        dp[0][0]=1;
        for(int i=1; i<=n; i++){
            dp[i][1]=dp[i-1][0];
            dp[i][0]=(dp[i-1][0]+dp[i-1][1])%1000000007;
        }
        return (long long)((dp[n][0]+dp[n][1])%1000000007)*((dp[n][0]+dp[n][1])%1000000007)%1000000007;
    }
};