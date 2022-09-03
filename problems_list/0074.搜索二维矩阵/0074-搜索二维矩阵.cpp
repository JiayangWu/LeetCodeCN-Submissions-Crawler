class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row = matrix.size(), col = matrix[0].size();
        // 右上角开始查找
        for(int i = 0, j = col-1; i < row && j >= 0;) {
            if(matrix[i][j] == target) 
                return true;
            else if(matrix[i][j] > target) 
                j--;
            else if(matrix[i][j] < target)
                i++;
        }
        return false;
    }
};