class Solution {
public:
    int check(char c){
        if(c<'0' || (c>'9'&& c<'A') || (c>'Z'&&c<'a') || (c>'z')) return 0;
        if(c>='0' && c<='9') return 1;
        return 2;
    }

    bool isPalindrome(string s) {
        for(int l=0, r=s.size()-1; l<r; ){
            while(l<r && check(s[l])==0) l++;
            while(l<r && check(s[r])==0) r--;
            if(s[l]==s[r] || (check(s[l])+check(s[r])==4 && abs(s[l]-s[r])==32)){
                l++, r--;
            }else{
                return false;
            }
        }
        return true;
    }
};