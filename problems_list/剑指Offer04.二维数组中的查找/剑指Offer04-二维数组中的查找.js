/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let m=matrix.length;
    if(m===0) return false;
    let n=matrix[0].length;
    if(n===0) return false;

    let x=0, y=n-1;
    while(x>=0 && x<m && y>=0 && y<n){
        if(matrix[x][y]===target) return true;
        else if(matrix[x][y]>target) y--;
        else x++;
    }
    return false;
};