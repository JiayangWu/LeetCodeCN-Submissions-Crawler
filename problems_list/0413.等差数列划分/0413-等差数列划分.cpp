class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
    vector<int> a(nums.size(),0);
    if(nums.size()<3) return 0;
    a[0]=a[1]=0;
    int cout=0;
    for(int i=2;i<nums.size();i++){
        if(nums[i]-nums[i-1]==nums[i-1]-nums[i-2]) a[i]=a[i-1]+1;
        cout+=a[i];
    }
    return cout;
    }
};
