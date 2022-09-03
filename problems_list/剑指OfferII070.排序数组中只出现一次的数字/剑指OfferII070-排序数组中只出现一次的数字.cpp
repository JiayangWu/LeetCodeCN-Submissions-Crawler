class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int l=0, r=nums.size()-1;
        while(l<r){
            int m=(r-l>>1)+l;
            m-=m&1;
            if(nums[m]==nums[m+1]){
                l=m+2;
            }else{
                r=m;
            }
        }
        return nums[r];
    }
};