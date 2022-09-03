class Solution {
public:
    bool check(int num){
        int tmp=num;
        while(tmp){
            int div=tmp%10;
            tmp/=10;
            if(div==0 || (num%div)!=0){
                return false;
            }
        }
        return true;
    }
    vector<int> selfDividingNumbers(int l, int r) {
        vector<int> ans;
        for(int i=l; i<=r; i++){
            if(check(i)){
                ans.push_back(i);
            }
        }
        return ans;
    }
};