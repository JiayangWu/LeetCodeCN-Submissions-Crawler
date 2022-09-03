class Solution {
public:
    int rob(vector<int>& nums) {
        if(nums.size()==1) return nums[0];

        int n=nums.size();
        vector<int> dp(n, 0);
        
        int ans=0;
        dp[0]=nums[0], dp[1]=max(nums[0], nums[1]);
        for(int i=2; i<n-1; i++){
            dp[i]=max(dp[i-1], dp[i-2]+nums[i]);
        }

        ans=max(ans, dp[n-2]);

        dp[0]=0, dp[1]=nums[1];
        for(int i=2; i<n; i++){
            dp[i]=max(dp[i-1], dp[i-2]+nums[i]);
        }
        ans=max(ans, dp[n-1]);

        return ans;
    }
};