class NumMatrix {
public:
    int rec[210][210];
    NumMatrix(vector<vector<int>>& matrix) {
        memset(rec, 0, sizeof rec);
        int m=matrix.size(), n=matrix[0].size();
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                rec[i+1][j+1]=matrix[i][j]+rec[i][j+1]+rec[i+1][j]-rec[i][j];
            }
        }
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        return rec[row2+1][col2+1]-rec[row1][col2+1]-rec[row2+1][col1]+rec[row1][col1];
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */