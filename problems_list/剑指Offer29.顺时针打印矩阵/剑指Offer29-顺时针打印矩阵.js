/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length===0) return [];
    let l=0, r=matrix[0].length-1, t=0, b=matrix.length-1;
    let ans=[];
    while(true){
        for(let i=l; i<r+1; i++) ans.push(matrix[t][i]);
        if(++t>b) break;

        for(let i=t; i<b+1; i++) ans.push(matrix[i][r]);
        if(--r<l) break;

        for(let i=r; i>l-1; i--) ans.push(matrix[b][i]);
        if(--b<t) break;

        for(let i=b; i>t-1; i--) ans.push(matrix[i][l]);
        if(++l>r) break;
    }
    return ans;
};