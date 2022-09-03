/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const [m, n]=[grid.length, grid[0].length];
    if(m===1 && n===1) return 0;
    k=Math.min(k, m+n-3);
    
    let queue=[];
    let vis=new Array(m).fill(0).map(x=>new Array(n).fill(0).map(x=>new Array(k).fill(0)));
    
    queue.push([0,0,k]);
    vis[0][0][k-1]=1;
    let dirs=[[0,1],[1,0],[0,-1],[-1,0]];

    for(let step=1; queue.length>0; step++){
        const cnt=queue.length;
        for(let _=0; _<cnt; _++){
            let [x, y, re]=queue.shift();
            for(let i=0; i<4; i++){
                let nx=x+dirs[i][0];
                let ny=y+dirs[i][1];
                if(nx>=0 && nx<m && ny>=0 && ny<n){
                    if(grid[nx][ny]===0 && !vis[nx][ny][re]){
                        if(nx===m-1 && ny===n-1) return step;
                        queue.push([nx, ny, re]);
                        vis[nx][ny][re]=1;
                    }else if(grid[nx][ny]===1 && re>0 && !vis[nx][ny][re-1]){
                        queue.push([nx, ny, re-1]);
                        vis[nx][ny][re-1]=1;
                    }
                }
            }
        }
    }
    return -1;
};