class Solution {
public:
    int validSubarraySize(vector<int> &nums, int threshold) {
        int n = nums.size();
        int left[n]; // left[i] 为左侧小于 nums[i] 的最近元素位置（不存在时为 -1）
        stack<int> s;
        for (int i = 0; i < n; ++i) {
            while (!s.empty() && nums[s.top()] >= nums[i]) s.pop();
            left[i] = s.empty() ? -1 : s.top();
            s.push(i);
        }

        int right[n]; // right[i] 为右侧小于 nums[i] 的最近元素位置（不存在时为 n）
        s = stack<int>();
        for (int i = n - 1; i >= 0; --i) {
            while (!s.empty() && nums[s.top()] >= nums[i]) s.pop();
            right[i] = s.empty() ? n : s.top();
            s.push(i);
        }

        for (int i = 0; i < n; ++i) {
            int k = right[i] - left[i] - 1;
            if (nums[i] > threshold / k) return k;
        }
        return -1;
    }
};