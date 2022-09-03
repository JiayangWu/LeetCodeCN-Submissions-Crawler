class Solution {
public:
    int dx[4]={-1,0,1,0}, dy[4]={0,1,0,-1};
    void dfs(vector<vector<char>>& board, int x, int y){
        board[x][y]='#';
        int m=board.size(), n=board[0].size();
        for(int i=0; i<4; i++){
            int nx=x+dx[i], ny=y+dy[i];
            if(nx>=0 && nx<m && ny>=0 && ny<n && board[nx][ny]=='O'){
                dfs(board, nx, ny);
            }
        }
    }

    void solve(vector<vector<char>>& board) {
        int m=board.size(), n=board[0].size();
        for(int i=0; i<m; i++){
            if(board[i][0]=='O') dfs(board, i, 0);
            if(board[i][n-1]=='O') dfs(board, i, n-1);
        }

        for(int i=0; i<n; i++){
            if(board[0][i]=='O') dfs(board, 0, i);
            if(board[m-1][i]=='O') dfs(board, m-1, i);
        }

        for(int i=0; i<m; i++){
            for(int j=0; j<n ;j++){
                if(board[i][j]=='#'){
                    board[i][j]='O';
                }else if(board[i][j]=='O'){
                    board[i][j]='X';
                }
            }
        }
        return;
    }
};