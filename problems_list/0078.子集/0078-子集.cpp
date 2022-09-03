class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        int n=nums.size();
        for(int i=0; i<pow(2, n); i++){
            vector<int> tmp;
            int idx=i;
            for(int j=0; j<n; j++){
                if(idx&1){
                    tmp.push_back(nums[j]);
                }
                idx>>=1;
            }
            ans.push_back(tmp);
        }
        return ans;
    }
};