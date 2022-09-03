class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int inf=1e9;
        int minprice=inf, ans=0;
        for(int price:prices){
            ans=max(ans, price-minprice);
            minprice=min(minprice, price);
        }
        return ans;
    }
};