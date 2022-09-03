class Solution {
public:
    int shortestSequence(vector<int>& a, int k) {
        set<int> s;
        int z = 0;
        for (int i : a)
        {
            s.insert(i);
            if (s.size() == k)
            {
                s.clear();
                z++;
            }
        }
        return z + 1;
    }
};