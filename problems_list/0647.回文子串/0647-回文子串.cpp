class Solution {
public:
    vector<int> rec;
    void expand(string s, int l, int r){
        int idx=l;
        while(l>=0 && r<s.length() && s[l]==s[r]){
            rec[l]++;
            l--, r++;
        }
    }

    int countSubstrings(string s) {
        int n=s.length();
        rec.resize(n);
        for(int i=0; i<n; i++){
            expand(s, i, i);
            expand(s, i, i+1);
        }
        int ans=0;
        for(int i=0; i<n; i++) ans+=rec[i];
        return ans;
    }
};