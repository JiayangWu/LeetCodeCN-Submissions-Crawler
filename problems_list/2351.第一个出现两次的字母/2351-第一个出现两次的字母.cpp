class Solution {
public:
    char repeatedCharacter(string s) {
        set<char> st;
        for(int i=0; i<s.length(); i++){
            if(st.count(s[i])){
                return s[i];
            }
            st.insert(s[i]);
        }
        return ' ';
    }
};