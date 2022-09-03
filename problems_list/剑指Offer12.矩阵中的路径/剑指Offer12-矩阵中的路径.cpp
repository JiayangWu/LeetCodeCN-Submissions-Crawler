class Solution {
public:
    int dirs[4][2]={{-1,0},{0,1},{1,0},{0,-1}};
    bool dfs(int x, int y, string & word, int j, vector<vector<char>>& board, vector<vector<int>>& vis){
        if(board[x][y]!=word[j]){
            return false;
        }else if(j==word.length()-1){
            return true;
        }

        vis[x][y]=1;
        bool result=false;
        for(int i=0; i<4; i++){
            int nx=x+dirs[i][0], ny=y+dirs[i][1];
            if(nx>=0 && nx<board.size() && ny>=0 && ny<board[0].size()){
                if(!vis[nx][ny]){
                    bool flag=dfs(nx, ny, word, j+1, board, vis);
                    if(flag){
                        result=true;
                        break;
                    }
                }
            }
        }
        vis[x][y]=0;
        return result;
    }
    bool exist(vector<vector<char>>& board, string word) {
        int m=board.size(), n=board[0].size();
        vector<vector<int>> vis(m, vector<int>(n, 0));
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(dfs(i, j, word, 0, board, vis))
                    return true;
            }
        }
        return false;
    }
};