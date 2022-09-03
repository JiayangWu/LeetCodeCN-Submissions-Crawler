class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int n=nums.size();
        if(n<2) return false;
        
        int ssum=accumulate(nums.begin(), nums.end(), 0);
        int maxNum=*max_element(nums.begin(), nums.end());
        
        if(ssum&1) return false;
        if(maxNum>ssum/2) return false;

        int tar=ssum/2;
        vector<vector<int>> f(n, vector<int>(tar+1, 0));
        for(int i=0; i<n; i++) f[i][0]=1;
        f[0][nums[0]]=1;

        for(int i=1; i<n; i++){
            for(int j=1; j<=tar; j++){
                f[i][j]=f[i-1][j];
                if(j>=nums[i]) f[i][j]|=f[i-1][j-nums[i]];
            }
        }
        return f[n-1][tar];
    }
};