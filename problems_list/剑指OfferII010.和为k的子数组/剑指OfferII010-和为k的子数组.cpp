class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> mp;
        mp[0]=1;
        int pre=0, count=0;
        for(int num:nums){
            pre+=num;
            if(mp.count(pre-k)){
                count+=mp[pre-k];
            }
            mp[pre]++;
        }
        return count;
    }
};