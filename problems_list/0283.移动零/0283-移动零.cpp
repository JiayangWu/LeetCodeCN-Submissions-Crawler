class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int cnt=0, n=nums.size();
        for(int i=0; i<n; i++){
            if(nums[i]!=0)
                nums[cnt++]=nums[i];
        }
        for(int i=cnt; i<n; i++) nums[i]=0;
    }
};