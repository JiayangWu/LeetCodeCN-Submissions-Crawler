class Solution {
public:
    vector<vector<string>> ans;
    vector<string> rec;

    bool isPara(string word){
        int l=0, r=word.size()-1;
        while(l<r){
            if(word[l]!=word[r]) return false;
            l++, r--;
        }
        return true;
    }

    void dfs(string& s, int start){
        if(start==s.size()){
            ans.push_back(rec);
            return;
        }

        string word="";
        for(int end=start; end<s.size(); end++){
            word.push_back(s[end]);
            if(isPara(word)){
                rec.push_back(word);
                dfs(s, end+1);
                rec.pop_back();
            }
        }
    }
    vector<vector<string>> partition(string s) {
        dfs(s, 0);
        return ans;
    }
};