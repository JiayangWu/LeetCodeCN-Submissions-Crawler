class Solution {
public:
    vector<vector<int>> ans;
    vector<int> rec;

    void backtrack(vector<int>& nums, int cur, int tar, bool pre_flag){
        if(tar==0){
            ans.push_back(rec);
            return;
        }
        
        if(cur==nums.size() || tar<nums[cur]){
            return;
        }
        // 是否能够选取当前值
        if(cur>0 && nums[cur-1]==nums[cur] && !pre_flag){
            backtrack(nums, cur+1, tar, false);
            return;
        }else{
            rec.push_back(nums[cur]);
            backtrack(nums, cur+1, tar-nums[cur], true);
            rec.pop_back();
            backtrack(nums, cur+1, tar, false);
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        backtrack(candidates, 0, target, false);
        return ans;
    }
};