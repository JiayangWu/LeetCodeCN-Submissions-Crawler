class Solution {
public:
    bool judge(string& s, int left, int right) {
        while(left<right) {
            if(s[left]!=s[right])
                return false;
            ++left;
            --right;
        }
        return true;
    }
    bool validPalindrome(string s) {
        int len=s.size();
        if(len<=1)
            return true;
        int left=0, right=len-1;
        while(left<right) {
            if(s[left]!=s[right]) {
                return judge(s,left+1,right) || judge(s,left,right-1);
            } else {
                ++left;
                --right;
            }
        }
        return true;
    }
};
