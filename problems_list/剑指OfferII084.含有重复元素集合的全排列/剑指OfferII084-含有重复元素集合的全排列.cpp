class Solution {
public:
    vector<vector<int>> ans;
    vector<int> perm;

    void dfs(vector<int>& nums, vector<int>& vis, int idx){
        if(idx==nums.size()){
            ans.emplace_back(perm);
            return;
        }

        for(int i=0; i<(int)nums.size(); i++){
            if(vis[i] || (i>0 && nums[i-1]==nums[i] && !vis[i-1])) continue;
            perm.push_back(nums[i]);
            vis[i]=1;
            dfs(nums, vis, idx+1);
            vis[i]=0;
            perm.pop_back();
        }
    }

    vector<vector<int>> permuteUnique(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<int> vis(nums.size(), 0);
        dfs(nums, vis, 0);
        return ans;
    }
};