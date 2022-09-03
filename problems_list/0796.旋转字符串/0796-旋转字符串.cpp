class Solution {
public:
    bool rotateString(string s, string goal) {
        int m=s.size(), n=goal.size();
        string ss=s+s;
        for(int i=0; i<n; i++){
            if(ss.substr(i, m)==goal){
                return true;
            }
        }
        return false;
    }
};