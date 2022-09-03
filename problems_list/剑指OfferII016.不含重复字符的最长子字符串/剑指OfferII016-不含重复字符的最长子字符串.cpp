class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int ans=0, n=s.length(), l=0;
        set<char> cnt;
        for(int r=0; r<n; r++){
            while(cnt.count(s[r])){
                cnt.erase(s[l]);
                l++;
            }
            cnt.insert(s[r]);
            ans=max(ans, r-l+1);
        }
        return ans;
    }
};