class Solution {
public:
    const int MOD=1000000007;
    int sumSubarrayMins(vector<int>& arr) {
        stack<pair<int,int>> stk;
        int ans=0, dot=0, n=arr.size();
        for(int i=0; i<n; i++){
            int cnt=1;
            while(stk.size() && stk.top().first>=arr[i]){
                int x=stk.top().first, c=stk.top().second;
                stk.pop();
                dot-=x*c;
                cnt+=c;
            }
            stk.push(make_pair(arr[i], cnt));
            dot=(dot+arr[i]*cnt)%MOD;
            ans=(ans+dot)%MOD;
        }
        return ans%MOD;
    }
};