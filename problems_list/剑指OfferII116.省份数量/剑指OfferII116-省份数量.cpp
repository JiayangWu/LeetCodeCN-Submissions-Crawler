class Solution {
public:
    unordered_map<int, vector<int>> mp;
    vector<int> province;
    int find(int x){
        if(x!=province[x]) province[x]=find(province[x]);
        return province[x];
    }

    
    int findCircleNum(vector<vector<int>>& isConnected) {
        int n=isConnected.size();
        province.resize(n);
        for(int i=0; i<n; i++){
            province[i]=i;
            for(int j=0; j<i; j++){
                if(isConnected[i][j]!=0){
                    mp[i].push_back(j);
                }
            }
        }

        for(int i=0; i<n; i++){
            for(int j=0; j<mp[i].size(); j++){
                province[find(mp[i][j])]=find(i);
            }
        }

        int ans=0;
        for(int i=0; i<n; i++){
            if(province[i]==i){
                ans++;
            }
        }
        return ans;
    }
};