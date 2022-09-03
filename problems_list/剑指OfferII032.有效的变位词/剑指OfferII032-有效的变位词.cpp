class Solution {
public:
    bool isAnagram(string s, string t) {
        string os=s, ot=t;
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        return os!=ot && s==t;
    }
};