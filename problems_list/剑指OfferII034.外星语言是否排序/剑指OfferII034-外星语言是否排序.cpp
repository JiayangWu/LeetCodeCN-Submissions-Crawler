class Solution {
public:
    bool check(string w1, string w2, unordered_map<char, int> mp){
        int len=min(w1.size(), w2.size());
        for(int i=0; i<len; i++){
            if(mp[w1[i]]>mp[w2[i]]){
                return false;
            }else if(mp[w1[i]]<mp[w2[i]]){
                return true;
            }
        }
        return w1.size()<=w2.size();
    }
    bool isAlienSorted(vector<string>& words, string order) {
        unordered_map<char, int> cnt;
        for(int i=0; i<order.size(); i++){
            cnt[order[i]]=i;
        }

        int n=words.size();
        for(int i=0; i<n-1; i++){
            if(!check(words[i], words[i+1], cnt)){
                return false;
            }
        }
        return true;
    }
};