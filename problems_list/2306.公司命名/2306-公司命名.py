class Solution:
    def distinctNames(self, ideas: List[str]) -> int:
        dic = {}
        num = 0
        ch_dic = [set() for i in range(26)]
        for idea in ideas:
            key = idea[1:]
            ch = ord(idea[0]) - 97
            if key not in dic:
                dic[key] = num
                num += 1
            ch_dic[ch].add(dic[key])

        res = 0
        for i in range(26):
            for j in range(i + 1, 26):
                res += len(ch_dic[i] - ch_dic[j]) * len(ch_dic[j] - ch_dic[i]) * 2
        return res