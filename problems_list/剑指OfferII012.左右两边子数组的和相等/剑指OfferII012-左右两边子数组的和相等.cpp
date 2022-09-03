class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int n=nums.size();
        for(int i=1; i<n; i++) nums[i]+=nums[i-1];
        nums.insert(nums.begin(), 0);
        nums.insert(nums.end(), nums.back());

        for(int i=1; i<n+1; i++){
            if(nums[i-1]==(nums[n+1]-nums[i]))
                return i-1;
        }
        return -1;

    }
};