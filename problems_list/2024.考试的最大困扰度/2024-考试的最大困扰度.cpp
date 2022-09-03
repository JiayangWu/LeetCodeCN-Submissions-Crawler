class Solution {
public:
    int maxConsecutiveChar(string s, char c, int k){
        int ans=0, n=s.length();
        for(int l=0, r=0, dif=0; r<n; r++){
            dif+=(s[r]!=c);
            while(dif>k){
                dif-=(s[l]!=c);
                l++;
            }
            ans=max(ans, r-l+1);
        }
        return ans;
    }
    int maxConsecutiveAnswers(string answerKey, int k) {
        return max(maxConsecutiveChar(answerKey, 'T', k), maxConsecutiveChar(answerKey, 'F', k));
    }
};