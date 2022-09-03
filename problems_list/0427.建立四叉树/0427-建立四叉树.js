var construct = function(grid) {
    const dfs=(sx, sy, ex, ey)=>{
        for(let i=sx; i<ex; i++){
            for(let j=sy; j<ey; j++){
                if(grid[sx][sy]!=grid[i][j]){
                    return new Node(true, false, 
                                    dfs(sx, sy, Math.floor((sx+ex)/2), Math.floor((sy+ey)/2)),
                                    dfs(sx, Math.floor((sy+ey)/2), Math.floor((sx+ex)/2), ey),
                                    dfs(Math.floor((sx+ex)/2), sy, ex, Math.floor((sy+ey)/2)),
                                    dfs(Math.floor((sx+ex)/2), Math.floor((sy+ey)/2), ex, ey),
                                    );
                }
            }

        }
        return new Node(grid[sx][sy]==1, true);
    };
    return dfs(0, 0, grid.length, grid.length);
};