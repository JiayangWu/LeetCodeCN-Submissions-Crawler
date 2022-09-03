class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n=nums.size(), i=n-2;
        while(i>=0 && nums[i]>=nums[i+1]) i--;
        // 最后一个排列
        if(i>=0){
            for(int j=n-1; j>i; j--)
                if(nums[j]>nums[i]){
                    swap(nums[i], nums[j]);
                    break;
                }
        }
        reverse(nums.begin()+i+1, nums.end());
    }
};