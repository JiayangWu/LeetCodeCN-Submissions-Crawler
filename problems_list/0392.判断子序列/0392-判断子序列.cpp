class Solution {
public:
    bool isSubsequence(string s, string t) {
        int sn=s.size(), tn=t.size();
        int i=0, j=0;
        for(; j<tn; j++){
            if(s[i]==t[j]) i++;
            if(i==sn) break;
        }
        return i==sn;
    }
};