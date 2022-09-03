class Solution {
public:
    bool hasAlternatingBits(int n) {
        int pre=-1;
        while(n){
            int cur=(n&1);
            if(cur==pre) return false;
            n>>=1;
            pre=cur;
        }
        return true;
    }
};