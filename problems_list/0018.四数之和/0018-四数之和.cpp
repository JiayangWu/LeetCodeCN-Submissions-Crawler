typedef long long LL;
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        int n=nums.size();
        sort(nums.begin(), nums.end());
        vector<vector<int>> ans;
        for(int i=0; i<n; i++){
            if(i>0 && nums[i-1]==nums[i]) continue;
            for(int j=i+1; j<n; j++){
                if(j>i+1 && nums[j-1]==nums[j]) continue;
                LL tar=1LL*target-nums[i]-nums[j];
                for(int l=j+1, r=n-1; l<r; ){
                    int tmp=nums[l]+nums[r];
                    if(tmp==tar){
                        vector<int> tmpV={nums[i], nums[j], nums[l], nums[r]};
                        ans.push_back(tmpV);
                        l++, r--;
                        while(l<r && nums[l]==nums[l-1]) l++;
                        while(l<r && nums[r]==nums[r+1]) r--;
                    }else if(tmp<tar){
                        l++;
                        while(l<r && nums[l]==nums[l-1]) l++;
                    }else{
                        r--;
                        while(l<r && nums[r]==nums[r+1]) r--;
                    }
                }
            }
        }
        return ans;
    }
};