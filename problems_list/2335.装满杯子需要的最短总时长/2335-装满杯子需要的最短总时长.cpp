class Solution {
public:
    int fillCups(vector<int>& am) {
        int ans=0;
        while(am[0]!=0 || am[1]!=0 || am[2]!=0){
            int f=-1, s=-1;
            f=am[0]>am[1]?0:1;
            f=am[f]>am[2]?f:2;
            
            if(f==0) s=am[1]>am[2]?1:2;
            if(f==1) s=am[0]>am[2]?0:2;
            if(f==2) s=am[0]>am[1]?0:1;
            
            am[f]--;
            if(am[s]!=0) am[s]--;
            ans++;
        }
        return ans;
    }
};