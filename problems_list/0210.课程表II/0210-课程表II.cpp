class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<int> indegree(numCourses, 0);
        unordered_map<int, vector<int>> mp;
        for(int i=0; i<prerequisites.size(); i++){
            int post=prerequisites[i][0], prev=prerequisites[i][1];
            indegree[post]++;
            mp[prev].push_back(post);
        }

        vector<int> ans;
        queue<int> q;
        for(int i=0; i<numCourses; i++){
            if(indegree[i]==0)
                q.push(i);
        }

        while(q.size()){
            int node=q.front();
            q.pop();
            ans.push_back(node);
            for(auto& post:mp[node]){
                if(--indegree[post]==0){
                    q.push(post);
                }
            }
        }
        return ans.size()==numCourses?ans:vector<int>{};
    }
};