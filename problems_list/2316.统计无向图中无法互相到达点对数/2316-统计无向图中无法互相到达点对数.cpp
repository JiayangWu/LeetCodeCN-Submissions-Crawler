typedef long long LL;
const int N=100010;
class Solution {
public:
    int p[N], d[N];
    int v[N];
    
    int find(int x){
        if(p[x]!=x) p[x]=find(p[x]);
        return p[x];
    }
    
    void init(){
        for(int i=0; i<N; i++) p[i]=i, d[i]=1;
    }
    
    LL countPairs(int n, vector<vector<int>>& edges) {
        init();
        int e=edges.size();
        for(int i=0; i<e; i++){
            int a=edges[i][0], b=edges[i][1];
            a=find(a), b=find(b);
            if(a!=b){
                p[a]=b;
                d[b]+=d[a];
            }
        }
        for(int i=0; i<n; i++) find(i);
        
        int idx=0;
        LL ans=0;
        for(int i=0; i<n; i++){
            if(p[i]==i){
                v[idx++]=d[i];
            }
        }
        for(int i=0; i<idx; i++) cout<<v[i]<<" ";
        for(int i=0; i<idx; i++){
            ans=ans+1LL*(n-v[i])*v[i];
        }
        return ans/2;
    }
};