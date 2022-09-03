class Solution {
public:
    int calPoints(vector<string>& ops) {
        vector<int> ans;
        int n=ops.size();
        for(int i=0; i<n; i++){
            if(ops[i]=="C") ans.pop_back();
            else if(ops[i]=="D") ans.push_back(ans.back()*2);
            else if(ops[i]=="+") ans.push_back(ans.back()+*(ans.end()-2));
            else ans.push_back(stoi(ops[i]));
        }
        return accumulate(ans.begin(), ans.end(), 0);
    }
};