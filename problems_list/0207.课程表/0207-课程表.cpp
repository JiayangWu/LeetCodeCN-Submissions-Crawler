const int N=100010;
class Solution {
public:
    unordered_map<int, vector<int>> mp;
    int ind[N];
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        int pn=prerequisites.size();
        for(int i=0; i<pn; i++){
            int a=prerequisites[i][0], b=prerequisites[i][1];
            mp[b].emplace_back(a);
            ind[a]++;
        }
        queue<int> q;
        for(int i=0; i<numCourses; i++){
            if(ind[i]==0)
                q.push(i);
        }
        int cnt=0;
        while(q.size()){
            int u=q.front();
            q.pop();
            cnt++;
            for(int j:mp[u]){
                if(--ind[j]==0){
                    q.push(j);
                }
            }
        }
        return cnt==numCourses;
    }
};