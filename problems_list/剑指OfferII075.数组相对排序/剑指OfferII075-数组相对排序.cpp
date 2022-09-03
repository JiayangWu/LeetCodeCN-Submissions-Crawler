class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        int upper = *max_element(arr1.begin(), arr1.end());
        vector<int> frequency(upper + 1);
        for (int x: arr1) {
            ++frequency[x];
        }
        vector<int> ans;
        for (int x: arr2) {
            for (int i = 0; i < frequency[x]; ++i) {
                ans.push_back(x);
            }
            frequency[x] = 0;
        }
        for (int x = 0; x <= upper; ++x) {
            for (int i = 0; i < frequency[x]; ++i) {
                ans.push_back(x);
            }
        }
        return ans;
    }
};