class Solution {
public:
    int arrayNesting(vector<int> &nums) {
        int ans = 0, n = nums.size();
        for (int i = 0; i < n; ++i) {
            int cnt = 0;
            while (nums[i] < n) {
                int num = nums[i];
                nums[i] = n;
                i = num;
                ++cnt;
            }
            ans = max(ans, cnt);
        }
        return ans;
    }
};