class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int n=board.size(),m=board[0].size();
        vector<vector<bool>> v(n,vector<bool>(m,0));
        pair<int,int> dir[4]={{0,1},{1,0},{-1,0},{0,-1}};
        bool t=0;
        auto dfs=[&](auto&& me,int&& k,int x,int y){
            if(k==word.size()){t=1;return;}
            if(x<0||x>=n||y<0||y>=m||v[x][y]||board[x][y]!=word[k])return ;
            else{
                for(int i=0;i!=4;++i){
                    v[x][y]=1;
                    me(me,k+1,x+dir[i].first,y+dir[i].second);
                    v[x][y]=0;
                    if(t)return ;
                }
            }
        };
        for(int i=0;i!=n;++i){
            for(int j=0;j!=m;++j){
                if(board[i][j]==word[0]){
                    dfs(dfs,0,i,j);
                    if(t)return t;
                }
            }
        }
        return 0;
    }
};