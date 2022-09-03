class Solution {
public:
    double quickPow(double x, long long p){
        double ans=1.0;
        double contri=x;
        while(p){
            if(p&1){
                ans*=contri;
            }
            contri*=contri;
            p>>=1;
        }
        return ans;
    }
    double myPow(double x, int n) {
        long long p=n;
        return p>=0?quickPow(x, p):1/quickPow(x, -p);
    }
};