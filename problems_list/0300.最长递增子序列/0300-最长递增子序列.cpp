class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n=nums.size(), len=1;
        if(n==0) return 0;

        vector<int> d(n+1, 0);
        d[len]=nums[0];
        for(int i=1; i<n; i++){
            if(nums[i]>d[len]){
                ++len;
                d[len]=nums[i];
            }else{
                int l=1, r=len, pos=0;
                while(l<=r){
                    int m=(r+l)>>1;
                    if(d[m]<nums[i]){
                        pos=m;
                        l=m+1;
                    }else{
                        r=m-1;
                    }
                }
                d[pos+1]=nums[i];
            }
        }
        return len;
    }
};