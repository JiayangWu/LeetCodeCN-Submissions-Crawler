class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temps) {
        stack<int> stk;
        int n=temps.size();
        vector<int> ans(n, 0);
        for(int i=0; i<n; i++){
            while(stk.size() && temps[stk.top()]<temps[i]){
                ans[stk.top()]=i-stk.top();
                stk.pop();
            }
            stk.push(i);
        }
        return ans;
    }
};