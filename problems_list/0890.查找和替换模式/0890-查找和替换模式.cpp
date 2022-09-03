class Solution {
    bool match(string &word, string &pattern) {
        unordered_map<char, char> mp;
        for (int i = 0; i < word.length(); ++i) {
            char x = word[i], y = pattern[i];
            if (!mp.count(x)) {
                mp[x] = y;
            } else if (mp[x] != y) { // word 中的同一字母必须映射到 pattern 中的同一字母上
                return false;
            }
        }
        return true;
    }

public:
    vector<string> findAndReplacePattern(vector<string> &words, string &pattern) {
        vector<string> ans;
        for (auto &word: words) {
            if (match(word, pattern) && match(pattern, word)) {
                ans.emplace_back(word);
            }
        }
        return ans;
    }
};