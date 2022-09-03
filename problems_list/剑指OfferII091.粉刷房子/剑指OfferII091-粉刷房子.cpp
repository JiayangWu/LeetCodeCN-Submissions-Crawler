class Solution {
public:
    int minCost(vector<vector<int>>& costs) {
        int n=costs.size();
        vector<vector<int>> dp(n, vector<int>(3,0));
        for(int j=0; j<3; j++){
            dp[0][j]=costs[0][j];
        }

        for(int i=1; i<n; i++){
            for(int j=0; j<3; j++){
                int prev1=dp[i-1][(j+2)%3];
                int prev2=dp[i-1][(j+1)%3];
                dp[i][j]=min(prev1, prev2)+costs[i][j];
            }
        }
        


        return min(dp[n-1][0], min(dp[n-1][1], dp[n-1][2]));
    }
};