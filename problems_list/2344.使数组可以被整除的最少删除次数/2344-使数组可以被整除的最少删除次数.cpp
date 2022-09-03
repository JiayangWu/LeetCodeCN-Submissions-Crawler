class Solution {
public:
    int gcd(int a, int b){
        // 对输入的两数大小无关，会交换的
        if(a%b==0) return b;
        return gcd(b, a%b);
    }
    
    int minOperations(vector<int>& nums, vector<int>& nD) {
        int n=nums.size(), nd=nD.size();
        unordered_map<int,int> mp;
    
        for(int i=0; i<n; i++) mp[nums[i]]++;
        
        int pre=nD[0];
        for(int i=0; i<nd-1; i++){
            if(i==0){
                pre=gcd(nD[i], nD[i+1]);
            }else{
                pre=gcd(pre, nD[i+1]);
            }
            if(pre==1) break;
        }
        sort(nums.begin(), nums.end());
        unique(nums.begin(), nums.end());
        cout<<"pre:"<<pre<<endl;
        if(pre==1 && nums[0]!=1) return -1;
        
        int ans=0;
        for(int i=0; i<nums.size(); i++){
            cout<<nums[i]<<endl;
            if(pre%nums[i]==0) break;
            ans+=mp[nums[i]];
        }
        return ans==n?-1:ans;
    }
};