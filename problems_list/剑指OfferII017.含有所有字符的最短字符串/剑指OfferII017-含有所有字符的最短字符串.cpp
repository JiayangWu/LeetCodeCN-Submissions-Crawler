class Solution {
public:
    unordered_map <char, int> ori, cnt;

    bool check() {
        for (const auto &p: ori) {
            if (cnt[p.first] < p.second) {
                return false;
            }
        }
        return true;
    }

    string minWindow(string s, string t) {
        int n=s.size(), m=t.size();
        if(n<m) return "";
        for (const auto &c: t) {
            ++ori[c];
        }

        int l = 0, r = 0;
        int len = INT_MAX, ansL = -1;

        while (r < n) {
            if (ori.find(s[r]) != ori.end()) {
                ++cnt[s[r]];
            }
            while (check() && l <= r) {
                if (r - l + 1 < len) {
                    len = r - l + 1;
                    ansL = l;
                }
                if (ori.find(s[l]) != ori.end()) {
                    --cnt[s[l]];
                }
                ++l;
            }
            r++;
        }
        return ansL == -1 ? string() : s.substr(ansL, len);
    }
};