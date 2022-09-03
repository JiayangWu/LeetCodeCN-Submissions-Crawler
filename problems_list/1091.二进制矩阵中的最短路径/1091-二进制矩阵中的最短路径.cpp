class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        int n=grid.size();
        if(grid[0][0]==1 || grid[n-1][n-1]==1) return -1;

        int dirs[8][2]={{-1,0}, {-1,1}, {0,1}, {1,1}, {1,0}, {1,-1}, {0,-1}, {-1,-1}};
        grid[0][0]=1;
        queue<pair<int, int>> q;
        q.push({0,0});

        while(!q.empty()){
            int len=q.size();
            for(int i=0; i<len; i++){
                pair<int,int> pos=q.front();
                q.pop();
                int x=pos.first, y=pos.second;
                for(int j=0; j<8; j++){
                    int nx=x+dirs[j][0], ny=y+dirs[j][1];
                    if(nx>=0 && nx<n && ny>=0 && ny<n && grid[nx][ny]==0){
                        grid[nx][ny]=grid[x][y]+1;
                        q.push({nx, ny});
                    }
                }
            }
        }
        return grid[n-1][n-1]!=0?grid[n-1][n-1]:-1;
    }
};