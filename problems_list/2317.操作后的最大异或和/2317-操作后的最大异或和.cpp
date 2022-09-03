class Solution {
public:
    int maximumXOR(vector<int>& nums) {
        int ans=0,i;
        for(auto &c:nums)for(i=0;c>>i;i++)if(c>>i&1)ans|=1<<i;
        return ans;
    }
};