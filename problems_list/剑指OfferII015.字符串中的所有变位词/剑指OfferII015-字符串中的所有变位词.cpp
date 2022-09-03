class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        int n=s.size(), m=p.size();
        if(n<m) return {};
        
        vector<int> cnt(26, 0);
        for(int i=0; i<m; i++){
            cnt[p[i]-'a']++;
        }

        int l=0;
        vector<int> ans;
        for(int r=0; r<n; r++){
            int x=s[r]-'a';
            cnt[x]--;
            while(cnt[x]<0){
                int y=s[l]-'a';
                cnt[y]++;
                l++;
            }
            if(r-l+1==m) ans.push_back(l);
        }
        return ans;
    }
};