class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        int n=s.length(), m=p.length();
        if(n<m) return {};

        int l=0;
        vector<int> cnt(26, 0), ans;
        for(int i=0; i<m; i++){
            cnt[p[i]-'a']++;
        }

        for(int r=0; r<n; r++){
            int idx=s[r]-'a';
            cnt[idx]--;
            while(cnt[idx]<0){
                cnt[s[l]-'a']++;
                l++;
            }
            if(r-l+1==m) ans.push_back(l);
        }
        return ans;
    }
};