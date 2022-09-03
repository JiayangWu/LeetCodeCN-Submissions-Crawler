class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        int ans=0, n=nums.size();
        for(int l=0, r=0; r<n; r++){
            if(r!=l && (nums[r]-nums[r-1]!=1 && nums[r]-nums[r-1]!=0)) l=r;
            ans=max(ans, nums[r]-nums[l]+1);
        }
        return ans;
    }
};