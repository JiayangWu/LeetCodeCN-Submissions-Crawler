class Solution {
public:
    unordered_map<int,int> mp;
    vector<int> numberOfPairs(vector<int>& nums) {
        int n=nums.size();
        for(int i=0; i<n; i++){
            mp[nums[i]]++;
        }
        
        int ps=0, res=0;
        for(auto [k, v]:mp){
            ps+=v/2;
            res+=v%2;
        }
        return {ps, res};
    }
};