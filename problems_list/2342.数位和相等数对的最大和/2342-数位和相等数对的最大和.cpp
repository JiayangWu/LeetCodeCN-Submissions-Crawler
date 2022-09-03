class Solution {
public:
    
    int sumDigit(int num){
        int ssum=0;
        while(num){
            ssum+=num%10;
            num/=10;
        }
        return ssum;
    }
    unordered_map<int, vector<int>> mp; 
    int maximumSum(vector<int>& nums) {
        int n=nums.size();
        for(int i=0; i<n; i++){
            int ssum=sumDigit(nums[i]);
            mp[ssum].emplace_back(nums[i]);
        }
        
        int ans=-1;
        for(auto [k, v]:mp){
            if(v.size()<2) continue;
            sort(v.begin(), v.end());
            int vn=v.size();
            ans=max(ans, v[vn-1]+v[vn-2]);
        }
        return ans;
    }
};