class Solution {
public:
    int cherryPickup(vector<vector<int>> &grid) {
        int n = grid.size();
        vector<vector<vector<int>>> f(n * 2 - 1, vector<vector<int>>(n, vector<int>(n, INT_MIN)));
        f[0][0][0] = grid[0][0];
        for (int k = 1; k < n * 2 - 1; ++k) {
            for (int x1 = max(k - n + 1, 0); x1 <= min(k, n - 1); ++x1) {
                int y1 = k - x1;
                if (grid[x1][y1] == -1) {
                    continue;
                }
                for (int x2 = x1; x2 <= min(k, n - 1); ++x2) {
                    int y2 = k - x2;
                    if (grid[x2][y2] == -1) {
                        continue;
                    }
                    int res = f[k - 1][x1][x2]; // ¶¼ÍùÓÒ
                    if (x1) {
                        res = max(res, f[k - 1][x1 - 1][x2]); // ÍùÏÂ£¬ÍùÓÒ
                    }
                    if (x2) {
                        res = max(res, f[k - 1][x1][x2 - 1]); // ÍùÓÒ£¬ÍùÏÂ
                    }
                    if (x1 && x2) {
                        res = max(res, f[k - 1][x1 - 1][x2 - 1]); // ¶¼ÍùÏÂ
                    }
                    res += grid[x1][y1];
                    if (x2 != x1) { // ±ÜÃâÖØ¸´ÕªÍ¬Ò»¸öÓ£ÌÒ
                        res += grid[x2][y2];
                    }
                    f[k][x1][x2] = res;
                }
            }
        }
        return max(f.back().back().back(), 0);
    }
};