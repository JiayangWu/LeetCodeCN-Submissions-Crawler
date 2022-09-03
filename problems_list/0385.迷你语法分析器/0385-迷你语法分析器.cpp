class Solution {
public:
    NestedInteger deserialize(string s) {
        if (s[0] != '[') {
            return NestedInteger(stoi(s));
        }
        stack<NestedInteger> st;
        int num = 0;
        bool negative = false;
        for (int i = 0; i < s.size(); i++) {
            char c = s[i];
            if (c == '-') {
                negative = true;
            } else if (isdigit(c)) {
                num = num * 10 + c - '0';
            } else if (c == '[') {
                st.emplace(NestedInteger());
            } else if (c == ',' || c == ']') {
                if (isdigit(s[i - 1])) {
                    if (negative) {
                        num *= -1;
                    }
                    st.top().add(NestedInteger(num));
                }
                num = 0;
                negative = false;
                if (c == ']' && st.size() > 1) {
                    NestedInteger ni = st.top();
                    st.pop();
                    st.top().add(ni);
                }
            }
        }
        return st.top();
    }
};