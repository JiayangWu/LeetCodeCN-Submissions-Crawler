class Solution {
public:
    double calculateTax(vector<vector<int>>& brackets, int income) {
        double ans=0;
        int n=brackets.size();
        int pre=0;
        for(int i=0; i<n; i++){
            int up1=brackets[i][0], per1=brackets[i][1];
            if(income<=pre) break;
            int dis=min(income, up1)-pre;
            pre=up1;
            ans+=1.0*dis*per1/100;
        }
        // if(income>brackets[n-1][0]) ans+=1.0*(income-brackets[n-1][0])*brackets[n-1][1]/100;
        return ans;
    }
};