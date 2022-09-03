/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m=mat.length, n=mat[0].length;
    var dist=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    var seen=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    var queue=[];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j]==0){
                var point=[i, j];
                queue.push(point);
                seen[i][j]=1;
            }
        }
    }

    const dirs=[[-1,0], [0,1], [1,0], [0,-1]];
    while(queue.length!=0){
        var point=queue[0];
        var x=point[0], y=point[1];
        queue.shift();
        for(let i=0; i<4; i++){
            var nx=x+dirs[i][0];
            var ny=y+dirs[i][1];
            // console.log(nx, ny);
            if(nx>=0 && nx<m && ny>=0 && ny<n && seen[nx][ny]==0){
                dist[nx][ny]=dist[x][y]+1;
                seen[nx][ny]=1;
                queue.push([nx, ny]);
            }
        }
    }
    return dist;
};