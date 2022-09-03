class Solution {
public:
    int maximumSwap(int num) {
        string s = to_string(num);
        stack<int> stk;
        int n = s.size();
        //维护一个递减的单调栈
        int i = 0;
        for(; i < n; ++i){
            if(stk.empty() || s[i] <= s[stk.top()])
                stk.push(i);
            else break;
        }
        //如果i == n，说明整个数字都是降序排列的，直接返回即可
        if(i == n)
            return stoi(s);

        int l_index;
        //r_index从第一个非单调的数字下标开始，找到最大值
        int r_index = i++;
        for(; i < n; ++i){
            if(s[i] >= s[r_index])
                r_index = i;
        }
        //通过比较栈顶找到l_index
        while(!stk.empty() && s[r_index] > s[stk.top()]){
            l_index = stk.top();
            stk.pop();
        }
        swap(s[l_index], s[r_index]);
        return stoi(s);
    }
};