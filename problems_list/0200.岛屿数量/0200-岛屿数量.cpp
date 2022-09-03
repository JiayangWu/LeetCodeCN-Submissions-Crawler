class Solution {
public:
    int dirs[4][2]={{-1,0},{0,1},{1,0},{0,-1}};
    int m,n;
    void dfs(vector<vector<char>>& matrix, int x, int y){
        matrix[x][y]='#';
        int nx=-1, ny=-1;
        for(int i=0; i<4; i++){
            nx=x+dirs[i][0], ny=y+dirs[i][1];
            if(nx>=0 && nx<m && ny>=0 && ny<n && matrix[nx][ny]=='1'){
                dfs(matrix, nx, ny);
            }
        }
    }
    int numIslands(vector<vector<char>>& grid) {
        int m=grid.size(), n=grid[0].size();
        this->m=m, this->n=n;
        int ans=0;
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(grid[i][j]=='1'){
                    dfs(grid, i, j);
                    ans++;
                }
            }
        }
        return ans;
    }
};