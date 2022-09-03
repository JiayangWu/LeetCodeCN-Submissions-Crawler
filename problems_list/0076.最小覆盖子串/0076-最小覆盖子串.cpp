class Solution {
public:
    bool isCurrentStrSatis(unordered_map<char, int> &current_satisfied, const unordered_map<char, int> &satisfied)
    {
        for (auto ch_pair : satisfied)
        {
            if (current_satisfied.count(ch_pair.first) <= 0 || current_satisfied[ch_pair.first] < ch_pair.second)
            {
                return false;
            }
        }
        return true;
    }

    string minWindow(string s, string t) {
        /* 基本思路：滑动窗口
        1. 遍历字符串t，找出所有字符出现的次数
        2.遍历字符串s，开始滑动窗口：
        2.1——左窗口移动条件：当前字符不在t的集合里，或者 数量超过字符的数量
        2.2——右窗口移动条件：当前子串不满足t的所有字符
        2.3——当前子串已经覆盖t所有字符时：记录下当前子串，left++，右窗口继续移动到等于左窗口的字符位置
        */
        unordered_map<char, int>satisfied;
        unordered_map<char, int>current_satisfied;
        for (auto ch : t)
        {
            satisfied[ch]++;
        }

        int left  = 0;
        int right = -1;// 当前字符串的左右边界：[left, right]
        string final_subStr;
        int n = s.size();
        while (right < n)
        {
            if (!isCurrentStrSatis(current_satisfied, satisfied))
            {
                // 不满足，延伸：right->
                right++;
                if (satisfied.count(s[right]) > 0)
                {
                    current_satisfied[s[right]]++;
                }
                continue;
            }

            while (satisfied.count(s[left]) <= 0 || current_satisfied[s[left]] > satisfied[s[left]])
            {
                // 满足，开始收敛：left->
                if (satisfied.count(s[left]) > 0)
                {
                    current_satisfied[s[left]]--;
                }
                left++;
            }

            if (final_subStr.empty() || right - left + 1 < final_subStr.size())
            {
                final_subStr = s.substr(left, right - left + 1);
            }

            current_satisfied[s[left]]--;
            left++;
        }

        return final_subStr;
    }
};