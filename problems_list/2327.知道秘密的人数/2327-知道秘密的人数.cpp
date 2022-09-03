class Solution {
    const int MOD = 1000000007;

public:
    int peopleAwareOfSecret(int n, int delay, int forget) {
        vector<long long> f(n + 1);
        f[1] = 1;
        for (int i = 2; i <= n; i++) for (int j = 1; j <= i; j++) if (i >= j + delay && i < j + forget) f[i] = (f[i] + f[j]) % MOD;
        long long ans = 0;
        for (int i = 1; i <= n; i++) if (i + forget > n) ans = (ans + f[i]) % MOD;
        return ans;
    }
};