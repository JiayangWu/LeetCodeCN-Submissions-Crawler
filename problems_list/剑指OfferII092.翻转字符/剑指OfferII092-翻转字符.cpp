class Solution {
public:
    int minFlipsMonoIncr(string s) {
        int n=s.length();
        vector<int> p(n+1, 0);
        for(int i=0; i<n; i++){
            p[i+1]=p[i]+(s[i]-'0');
        }

        int ans=INT_MAX;
        for(int i=0; i<=n; i++){
            ans=min(ans, p[i]+n-i-(p[n]-p[i]));
        }
        return ans;
    }
};