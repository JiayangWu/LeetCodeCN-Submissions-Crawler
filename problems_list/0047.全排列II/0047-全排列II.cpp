class Solution {
public:
    vector<vector<int>> ans;
    vector<int> perm;
    void backtrack(int idx, vector<int> &nums, vector<int>& vis){
        if(idx==nums.size()){
            ans.push_back(perm);
            return;
        }

        for(int i=0; i<nums.size(); i++){
            if(vis[i]) continue;
            if(i>0 && nums[i-1]==nums[i] && !vis[i-1]) continue;
            perm.push_back(nums[i]);
            vis[i]=1;
            backtrack(idx+1, nums, vis);
            vis[i]=0;
            perm.pop_back();
        }
    }
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        int n=nums.size();
        sort(nums.begin(), nums.end());
        vector<int> vis(n, 0);
        backtrack(0, nums, vis);
        return ans;
    }
};