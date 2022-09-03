/**
 * @param {number[][]} matrix
 * @return {number}
 */

var longestIncreasingPath = function(matrix) {
    if(matrix.length==0 || matrix[0].length==0) return 0;
    const rows=matrix.length, cols=matrix[0].length;
    var cache=new Array(rows).fill(0).map(()=>new Array(cols).fill(0));
    const dirs=[[-1,0],[0,1],[1,0],[0,-1]];

    const dfs=function(i, j){
        if(cache[i][j]!=0){
            return cache[i][j];
        }
        cache[i][j]+=1;
        // console.log(cache);
        for(let k=0; k<4; k++){
            var ni=i+dirs[k][0], nj=j+dirs[k][1];
            if(ni>=0 && ni<rows && nj>=0 && nj<cols && matrix[i][j]>matrix[ni][nj]){
                cache[i][j]=Math.max(cache[i][j], dfs(ni, nj)+1);
            }
        }
        return cache[i][j];
    }
    var ans=1;
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            ans=Math.max(ans, dfs(i, j, cache));
        }
    }
    // console.log(cache);
    return ans;
};