class Solution {
public:
    string addStrings(string num1, string num2) {
        int p1=num1.size()-1, p2=num2.size()-1;
        int carry=0;
        string ans="";
        while(p1>=0 || p2>=0){
            int n1=(p1<0?0:(num1[p1]-'0'));
            p1--;
            int n2=(p2<0?0:(num2[p2]-'0'));
            p2--;
            int sum=carry+n1+n2;
            int cur=sum%10;
            carry=sum/10;
            ans+=to_string(cur);
        }
        if(carry) ans+=to_string(carry);
        reverse(ans.begin(), ans.end());
        return ans;
    }
};