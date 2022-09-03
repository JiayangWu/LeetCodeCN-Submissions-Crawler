class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
        int mn=INT_MAX, n=arr.size();
        sort(arr.begin(), arr.end());
        vector<vector<int>> ans;
        for(int i=0; i<n-1; i++) mn=min(mn, arr[i+1]-arr[i]);
        for(int i=0; i<n-1; i++){
            if(arr[i+1]-arr[i]==mn){
                ans.push_back({arr[i],arr[i+1]});
            }
        }
        return ans;
    }
};