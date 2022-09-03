class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> st;
        for(string str:wordDict){
            st.insert(str);
        }

        int n=s.size();
        vector<bool> dp(n+1, false);
        dp[0]=true;
        for(int i=1; i<=n; i++){
            for(int j=0; j<i; j++){
                if(dp[j] && st.count(s.substr(j, i-j))){
                    dp[i]=true;
                    break;
                }
            }
        }
        return dp[n];
    }
};
