class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n=heights.size();
        vector<int> left(n,0), right(n, n);
        stack<int> mono;
        for(int i=0; i<n; i++){
            while(!mono.empty() && heights[mono.top()]>=heights[i]){
                right[mono.top()]=i;
                mono.pop();
            }
            left[i]=(mono.empty()?-1:mono.top());
            mono.push(i);
        }

        // mono=stack<int>();
        // mono.clear();
        // for(int i=n-1; i>=0; i--){
        //     while(!mono.empty() && heights[mono.top()]>=heights[i]){
        //         mono.pop();
        //     }
        //     right[i]=(mono.empty()?n:mono.top());
        //     mono.push(i);
        // }

        int ans=0;
        for(int i=0; i<n; i++){
            ans=max(ans, heights[i]*(right[i]-left[i]-1));
        }
        return ans;
    }
};