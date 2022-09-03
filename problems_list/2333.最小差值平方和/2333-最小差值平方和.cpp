class Solution {
public:
    long long minSumSquareDiff(vector<int> &a, vector<int> &nums2, int k1, int k2) {
        int n = a.size(), k = k1 + k2;
        long ans = 0L, sum = 0L;
        for (int i = 0; i < n; ++i) {
            a[i] = abs(a[i] - nums2[i]);
            sum += a[i];
            ans += (long) a[i] * a[i];
        }
        if (sum <= k) return 0;
        sort(a.begin(), a.end(), greater<int>());
        a.push_back(0); // из╠Ь
        for (int i = 0;; ++i) {
            long j = i + 1, v = a[i], c = j * (v - a[j]);
            ans -= v * v;
            if (c < k) {
                k -= c;
                continue;
            }
            v -= k / j;
            return ans + k % j * (v - 1) * (v - 1) + (j - k % j) * v * v;
        }
    }
};