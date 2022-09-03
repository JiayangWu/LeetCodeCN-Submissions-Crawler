class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> rec(n+1, 0);
        int highBit=1;
        for(int i=1; i<=n; i++){
            if((i&(i-1))==0){
                highBit=i;
            }
            rec[i]=rec[i-highBit]+1;
        }
        return rec;
    }
};