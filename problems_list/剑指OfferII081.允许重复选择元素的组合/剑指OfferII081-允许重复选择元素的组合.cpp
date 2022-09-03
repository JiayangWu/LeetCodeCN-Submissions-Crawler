class Solution {
public:
    vector<vector<int>> ans;
    vector<int> temp;

    void dfs(vector<int>& cand, int cur, int target){
        if(cur==cand.size()){
            return;
        }
        if(target==0){
            ans.emplace_back(temp);
            return;
        }
        dfs(cand, cur+1, target);
        if(cand[cur]<=target){
            temp.push_back(cand[cur]);
            dfs(cand, cur, target-cand[cur]);
            temp.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        dfs(candidates, 0, target);
        return ans;
    }
};