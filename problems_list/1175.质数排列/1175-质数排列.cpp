class Solution {
public:
    const int M=1000000007;
    int perm(int n){
        int res=1;
        for(int i=n; i>=1; i--){
            res=(1LL*res*i)%M;
        }
        return res;
    }
    bool st[110];
    int  primes[110], cnt=0;
    int numPrimeArrangements(int n) {
        // if(n<2) return 1;
        for(int i=2; i<=n; i++){
            if(!st[i]) primes[cnt++]=i;
            for(int j=0; primes[j]<=n/i; j++){
                st[primes[j]*i]=true;
                if(i%primes[j]==0) break;
            }
        }

        return (1LL*perm(cnt)*perm(n-cnt))%M;
    }
};