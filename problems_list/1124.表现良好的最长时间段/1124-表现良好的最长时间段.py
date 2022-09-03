class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        n = len(hours)
        # 大于8小时计1分 小于等于8小时计-1分
        score = [0] * n
        for i in range(n):
            if hours[i] > 8:
                score[i] = 1
            else:
                score[i] = -1
        # 前缀和
        presum = [0] * (n + 1)
        for i in range(1, n + 1):
            presum[i] = presum[i - 1] + score[i - 1]
        ans = 0
        stack = []
        # 顺序生成单调栈，栈中元素从第一个元素开始严格单调递减，最后一个元素肯定是数组中的最小元素所在位置
        for i in range(n + 1):
            if not stack or presum[stack[-1]] > presum[i]:
                stack.append(i)
        # 倒序扫描数组，求最大长度坡
        i = n
        while i > ans:
            while stack and presum[stack[-1]] < presum[i]:
                ans = max(ans, i - stack[-1])
                stack.pop()
            i -= 1
        return ans