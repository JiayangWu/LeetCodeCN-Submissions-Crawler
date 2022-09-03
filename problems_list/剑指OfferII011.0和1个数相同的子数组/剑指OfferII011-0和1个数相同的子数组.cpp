class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> mp;
        int pre=0, len=0;
        mp[0]=-1;
        for(int i=0; i<nums.size(); i++){
            if(nums[i]==0) pre-=1;
            else pre+=1;

            if(mp.count(pre)){
                len=max(len, (i-mp[pre]));
            }else{
                mp[pre]=i;
            }
        }
        return len;
    }
};