class Solution {
public:
    int minimumNumbers(int num, int k) {
        vector<int> nums;
        for(int i=0; i<=num; i++){
            if(i%10==k)
                nums.emplace_back(i);
        }
        
        int n=nums.size();
        vector<vector<int>> dp(n+1, vector<int>(num+1, 3010));
        for(int i=0; i<=n; i++) dp[i][0]=0;
        
        for(int i=1; i<=n; i++){
            for(int j=1; j<=num; j++){
                dp[i][j]=dp[i-1][j];
                if(j>=nums[i-1]) dp[i][j]=min(dp[i][j], dp[i][j-nums[i-1]]+1);
            }
        }
        // for(int i=0; i<=n; i++){
        //     for(int j=0; j<=num; j++){
        //         cout<<dp[i][j]<<" ";
        //     }
        //     cout<<endl;
        // }
        return dp[n][num]>=3010?-1:dp[n][num];
    }
};