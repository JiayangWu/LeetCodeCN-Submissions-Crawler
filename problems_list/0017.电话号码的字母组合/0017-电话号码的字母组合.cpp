class Solution {
public:
    vector<string> mp={"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    string rec="";
    vector<string> ans;
    void backtrack(string& digits, int cur, int& len){
        if(cur==len){
            ans.push_back(rec);
            return;
        }
        string options=mp[digits[cur]-'2'];
        for(int i=0; i<(int)options.size(); i++){
            rec.push_back(options[i]);
            backtrack(digits, cur+1, len);
            rec.pop_back();
        }
    }
    vector<string> letterCombinations(string digits) {
        int l=digits.length();
        if(l==0) return {};
        backtrack(digits, 0, l);
        return ans;
    }
};