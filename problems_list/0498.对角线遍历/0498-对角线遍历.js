/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m=mat.length, n=mat[0].length;
    let ans=[], idx=0;
    // 先行遍历
    for(let i=0; i<m; i++){
        let cx=i, cy=0;
        let layer=[];
        while(cx>=0 && cx<m && cy>=0 && cy<n){
            layer.push(mat[cx][cy]);
            [cx, cy]=[cx-1, cy+1];
        }
        if(idx%2) layer=layer.reverse();
        ans.push(...layer);
        idx++;
    }
    // 按列遍历
    for(let j=1; j<n; j++){
        let cx=m-1, cy=j;
        let layer=[];
        while(cx>=0 && cx<m && cy>=0 && cy<n){
            layer.push(mat[cx][cy]);
            [cx, cy]=[cx-1, cy+1];
        }
        if(idx%2) layer=layer.reverse();
        ans.push(...layer);
        idx++;
    }
    return ans;
};