class Solution {
public:
    int binaryGap(int n) {
        int ans=INT_MIN;
        int pre=-1;
        int cur=0;
        while(n){
            if(pre==-1 && n&1==1){
                pre=cur;
            }
            if(pre!=-1 && n&1==1){
                ans=max(ans, cur-pre);
                pre=cur;
            }
            n>>=1;
            cur++;
        }
        return ans;
    }
};