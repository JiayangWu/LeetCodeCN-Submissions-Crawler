class Solution {
public:
    long long countExcellentPairs(vector<int>& a, int k) {
        vector<int> c(150);
        set<int> s;
        for (int i : a)
        {
            s.insert(i);
        }
        for (int i : s)
        {
            c[__builtin_popcount(i)]++;
        }
        long long z = 0;
        for (int i = 0; i < 70; i++)
        {
            for (int j = 0; j < 70; j++)
            {
                if (i + j >= k)
                {
                    z += (long long)c[i] * c[j];
                }
            }
        }
        return z;
    }
};