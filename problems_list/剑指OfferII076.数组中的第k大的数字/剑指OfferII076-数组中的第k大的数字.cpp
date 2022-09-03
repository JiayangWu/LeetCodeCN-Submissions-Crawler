class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;
        for(int i=0; i<(int)nums.size(); i++){
            if(pq.size()<k){
                pq.push(nums[i]);
            }else{
                if(pq.top()<nums[i]){
                    // cout<<pq.top()<<endl;
                    pq.pop();
                    pq.push(nums[i]);
                }
            }
        }
        return pq.top();
    }
};