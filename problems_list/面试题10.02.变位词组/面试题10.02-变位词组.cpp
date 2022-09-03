class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> mp;
        for(string str:strs){
            string val=str;
            sort(str.begin(), str.end());
            mp[str].push_back(val);
        }

        vector<vector<string>> ans;
        for(auto [key, val]:mp){
            ans.push_back(val);
        }
        return ans;
    }
};