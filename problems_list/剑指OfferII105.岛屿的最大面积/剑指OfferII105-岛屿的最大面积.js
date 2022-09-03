/**
 * @param {number[][]} grid
 * @return {number}
 */

let dirs=[[-1,0],[0,1],[1,0],[0,-1]];

let dfs=function(grid, x, y){
    let m=grid.length, n=grid[0].length;
    if(x<0 || x>=m || y<0 || y>=n || grid[x][y]===0){
        return 0;
    }
    let cnt=1;
    grid[x][y]=0;
    for(let i=0; i<4; i++){
        let nx=x+dirs[i][0], ny=y+dirs[i][1];
        cnt+=dfs(grid, nx, ny)
    }
    return cnt;
}

var maxAreaOfIsland = function(grid) {
    let m=grid.length, n=grid[0].length;
    let ans=0;
    for(let i=0; i<m; i++)
        for(let j=0; j<n; j++)
            ans=Math.max(ans, dfs(grid, i, j));
    
    return ans;
};