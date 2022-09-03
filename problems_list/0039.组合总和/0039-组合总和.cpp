class Solution {
public:
    vector<vector<int>> ans;
    vector<int> rec;

    void dfs(vector<int>& cands, int cur, int target){
        if(target==0){
            ans.push_back(rec);
            return;
        }

        for(int i=cur ;i<(int)cands.size(); i++){
            if(target<cands[i]) break;
            rec.push_back(cands[i]);
            dfs(cands, i, target-cands[i]);
            rec.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        dfs(candidates, 0, target);
        return ans;
    }
};