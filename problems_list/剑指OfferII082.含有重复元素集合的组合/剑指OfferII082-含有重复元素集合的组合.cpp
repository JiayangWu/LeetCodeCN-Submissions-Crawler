class Solution {
public:
    vector<vector<int>> ans;
    vector<int> rec;

    void backtrack(vector<int>& nums, int cur, int tar, bool pre_flag){
        // 因为每个元素都大于0
        if(tar==0){
            ans.push_back(rec);
            // return;
        }

        // 出口、剪枝
        if(cur==nums.size() || tar<nums[cur]){
            return;
        }
        
        // 是否能够选取当前值
        if(cur>0 && nums[cur-1]==nums[cur] && !pre_flag){
            backtrack(nums, cur+1, tar, false);
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