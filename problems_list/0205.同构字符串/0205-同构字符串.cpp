class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int sn=s.size(), tn=t.size();
        if(sn!=tn) return false;
        unordered_map<char, char> stmp, tsmp;
        for(int i=0; i<sn; i++){
            if((stmp.count(s[i]) && stmp[s[i]]!=t[i]) || tsmp.count(t[i]) && tsmp[t[i]]!=s[i])  
                return false;
            stmp[s[i]]=t[i], tsmp[t[i]]=s[i];
        }
        return true;
    }
};