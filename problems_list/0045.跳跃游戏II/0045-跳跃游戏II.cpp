class Solution {
public:
    int jump(vector<int>& nums) {
        int max_pos=0, end=0, step=0, n=nums.size();
        for(int i=0; i<n-1; i++){
            if(i<=max_pos){
                max_pos=max(max_pos, i+nums[i]);
                if(i==end){
                    end=max_pos;
                    step++;
                }
            }
        }
        return step;
    }
};