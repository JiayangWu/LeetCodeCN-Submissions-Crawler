class Solution {
public:
    int minPathCost(vector<vector<int>>& grid, vector<vector<int>>& moveCost) {
        int m=grid.size(), n=grid[0].size();
        vector<vector<int>> pathVal(m, vector<int>(n, 1e6));
        for(int i=0;i<n;i++) pathVal[0][i]=grid[0][i];
        
        for(int i=0; i<m-1; i++){
            for(int j=0; j<n; j++){
                int curVal=grid[i][j];
                for(int k=0; k<n; k++){
                    pathVal[i+1][k]=min(pathVal[i+1][k], pathVal[i][j]+moveCost[curVal][k]);
                }
            }
            for(int k=0;k<n;k++){
                pathVal[i+1][k]+=grid[i+1][k];
            }
        }
        int ans=INT_MAX;
        for(int i=0;i<n;i++) ans=min(ans, pathVal[m-1][i]);
        return ans;
    }
};