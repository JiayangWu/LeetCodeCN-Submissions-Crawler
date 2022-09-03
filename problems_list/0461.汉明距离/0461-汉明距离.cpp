class Solution {
public:
    int hammingDistance(int x, int y) {
        int ans=0;
        while(x || y){
            int dx=x&1, dy=y&1;
            if(dx!=dy) ans++;
            x>>=1, y>>=1;
        }
        return ans;
    }
};