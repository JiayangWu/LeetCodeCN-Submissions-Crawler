/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n=grid.length;
    let rows=[], cols=[];
    for(let i=0; i<n; i++){
        rows.push(grid[i].join(' '));
    }
    
    for(let j=0; j<n; j++){
        let chs=[];
        for(let i=0; i<n; i++){
            chs.push(grid[i][j]);
        }
        cols.push(chs.join(' '));
    }
    
    let ans=0;
    for(let rstr of rows){
        for(let cstr of cols){
            if(rstr===cstr){
                ans++;
            }
        }
    }
    return ans;
};