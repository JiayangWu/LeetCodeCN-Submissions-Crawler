class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int l=1, r=pow(10, 9);
        int ans=-1;
        while(l<=r){
            int m=l+((r-l-1)>>1)+1;
            if(!possible(piles, h, m)){
                l=m+1;
            }else{
                ans=m;
                r=m-1;
            }
        }
        return ans;
    }

    bool possible(vector<int>& piles, int H, int K){
        int time=0;
        for(int p:piles){
            time+=(p-1)/K+1;
        }
        return time<=H;
    }
};