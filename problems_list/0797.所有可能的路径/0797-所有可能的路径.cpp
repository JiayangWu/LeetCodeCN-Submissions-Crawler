class Solution {
public:
    vector<vector<int>> ans;
    vector<int> stk;

    void dfs(vector<vector<int>>& g, int cur, int tar){
        stk.push_back(cur);
        if(cur==tar){
            ans.push_back(stk);
            return;
        }
        for(int nxt:g[cur]){
            // stk.push_back(nxt);
            dfs(g, nxt, tar);
            stk.pop_back();
        }
        return;
    }
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        
        dfs(graph, 0, graph.size()-1);
        return ans;
    }
};