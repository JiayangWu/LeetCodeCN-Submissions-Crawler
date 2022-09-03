class Solution {
public:
    vector<vector<int>> ans;
    void dfs(vector<int>& nums, int cur, vector<int>& temp){
        if(cur==nums.size()){
            ans.push_back(temp);
            return;
        }
        dfs(nums, cur+1, temp);
        temp.push_back(nums[cur]);
        dfs(nums, cur+1, temp);
        temp.pop_back();
    }
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<int> t;
        dfs(nums, 0, t);
        return ans;
    }
};