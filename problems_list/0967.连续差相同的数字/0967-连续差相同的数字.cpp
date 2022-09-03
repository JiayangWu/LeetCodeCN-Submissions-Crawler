class Solution {
public:
    vector<int> ans;
    //now 当前选出的数，left剩余的数字
    void func(int now, int left, int k){
        if(left == 0){
            ans.push_back(now);
            return ;
        }
        //如now为2  k为3  便没有符合的数    
        if(now % 10 - k >= 0) {
            func(now * 10 + now %10 - k, left - 1, k);
        }
        //k=0时，now % 10 - k 和now % 10 + k是一样的，答案会重复 
        if(k != 0 && now % 10 + k < 10){
            func(now * 10 + now %10 + k, left - 1, k);
        }
    }
    vector<int> numsSameConsecDiff(int n, int k) {
        for(int i = 1; i<= 9; i++){
            func(i, n - 1, k);
        }
        return ans;
    }
};