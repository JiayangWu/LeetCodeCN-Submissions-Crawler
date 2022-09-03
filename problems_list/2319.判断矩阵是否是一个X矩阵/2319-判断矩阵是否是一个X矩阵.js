/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    let n=grid.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if((i===j || j+i===n-1) ){
                if(grid[i][j]===0) return false;
            }else {
                if(grid[i][j]!==0) return false;
            }
        }
    }
    return true;
};