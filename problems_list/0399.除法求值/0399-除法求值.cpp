class Solution {
public:
    double grap[40][40];
    unordered_map<string, int> mp;

    vector<double> calcEquation(vector<vector<string>>& eqs, vector<double>& vs, vector<vector<string>>& qs) {
        int cnt=0, n=eqs.size(), qn=qs.size();
        for(int i=0; i<n; i++){
            string qa=eqs[i][0], qb=eqs[i][1];
            int ia, ib;
            if(!mp.count(qa)){
                ia=cnt++;
                mp[qa]=ia;
            }else{
                ia=mp[qa];
            }
            if(!mp.count(qb)){
                ib=cnt++;
                mp[qb]=ib;
            }else{
                ib=mp[qb];
            }
            grap[ia][ib]=vs[i], grap[ib][ia]=1.0/vs[i];
        }

        // for(int i=0; i<cnt; i++){
        //     for(int j=0; j<cnt; j++){
        //         cout<<grap[i][j]<<" ";
        //     }
        //     cout<<endl;
        // }
        vector<double> ans;
        for(int i=0; i<qn; i++){
            string qa=qs[i][0], qb=qs[i][1];
            if(!mp.count(qa) || !mp.count(qb)){
                ans.emplace_back(-1.0);
                continue;
            }
            int ia=mp[qa], ib=mp[qb];
            if(ia==ib){
                ans.emplace_back(1.0);
                continue;
            }

            vector<double> vals(cnt, 0);
            vals[ia]=1.0;
            queue<int> q;
            q.push(ia);
            while(q.size() && vals[ib]==0){
                int idx=q.front();
                q.pop();
                // cout<<"idx: "<<idx<<endl;
                for(int j=0; j<cnt; j++){
                    if(!vals[j] && grap[idx][j]){
                        vals[j]=vals[idx]*grap[idx][j];
                        q.push(j);
                    }
                }
            }
            if(!vals[ib]) ans.emplace_back(-1.0);
            else ans.emplace_back(vals[ib]);
        }
        return ans;
    }
};