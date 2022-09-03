class Solution {
public:
    const int MOD=1000000007;
    vector<vector<int>> dirs={{-1,0},{0,1},{1,0},{0,-1}};
    
    int countPaths(vector<vector<int>>& grid) {
        int m=grid.size(), n=grid[0].size();
        
        vector<vector<int>> dp(m, vector<int>(n, 1));
        unordered_map<int, vector<pair<int, int>>> mp;
        priority_queue<int, vector<int>, greater<int>> pq;
        
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(mp.count(grid[i][j])==0) pq.push(grid[i][j]);
                mp[grid[i][j]].push_back(make_pair(i, j));
            }
        }
        
        while(pq.size()){
            int val=pq.top();
            pq.pop();
            for(auto [x, y]:mp[val]){
                for(int i=0; i<4; i++){
                    int nx=x+dirs[i][0], ny=y+dirs[i][1];
                    int tmp=0;
                    if(nx>=0 && nx<m && ny>=0 && ny<n && grid[nx][ny]<grid[x][y]){
                        tmp=(dp[nx][ny]+tmp)%MOD;
                    }
                    dp[x][y]=(dp[x][y]+tmp)%MOD;
                }
            }
        }
        
        int ans=0;
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                ans=(ans+dp[i][j])%MOD;
            }
        }
        
        return ans;
    }
};