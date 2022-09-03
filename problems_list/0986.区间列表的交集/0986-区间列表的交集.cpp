class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& A, vector<vector<int>>& B) {
        int n=A.size(), m=B.size();
        vector<vector<int>> ans;
        for(int i=0, j=0; i<n && j<m;){
            int l=max(A[i][0], B[j][0]), r=min(A[i][1], B[j][1]);
            if(l<=r) ans.push_back({l, r});
            if(B[j][1]>=A[i][1]) i++;
            else j++;
        }
        return ans;
    }
};