class Solution {
public:
    int subtractProductAndSum(int n) {
        string strn=to_string(n);
        int mul=1, sum=0;
        for(int i=0; i<strn.size(); i++){
            mul*=(strn[i]-'0');
            sum+=(strn[i]-'0');
        }
        return mul-sum;
    }
};