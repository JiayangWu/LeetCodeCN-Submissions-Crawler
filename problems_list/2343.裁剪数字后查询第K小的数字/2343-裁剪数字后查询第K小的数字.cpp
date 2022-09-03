class Solution {
public:
    vector<int> smallestTrimmedNumbers(vector<string>& nums, vector<vector<int>>& queries) {
        int n = nums.size(), m = nums[0].size();
        // vecs[i][j] 表示基数排序第 i 轮中第 j 小的数对应的下标
        vector<vector<int>> vecs(m + 1);
        for (int i = 0; i < n; i++) vecs[0].push_back(i);
        for (int i = 1; i <= m; i++) {
            vector<vector<int>> B(10);
            // 把第 i - 1 轮的结果，根据 nums 中右数第 i 位数，依次放入桶中
            for (int x : vecs[i - 1]) B[nums[x][m - i] - '0'].push_back(x);
            // 把每个桶的结果连接起来，成为第 i 轮的结果
            for (int j = 0; j < 10; j++) for (int x : B[j]) vecs[i].push_back(x);
        }

        vector<int> ans;
        for (auto &q : queries) ans.push_back(vecs[q[1]][q[0] - 1]);
        return ans;
    }
};