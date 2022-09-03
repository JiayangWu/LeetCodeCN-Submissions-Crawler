class Solution {
public:
    string build(string s){
        string ans="";
        for(int i=0; i<s.size(); i++){
            if(s[i]=='#' && ans.size()>0) ans.pop_back();
            else if(s[i]!='#') ans.push_back(s[i]);
        }
        return ans;
    }
    bool backspaceCompare(string s, string t) {
        return build(s)==build(t);
    }
};