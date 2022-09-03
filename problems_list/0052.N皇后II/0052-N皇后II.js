/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
    let solutions=0;
    let queens=new Array(n).fill(-1);
    let coulumn=new Array(n).fill(0);
    let diagonals1=new Array(2*n).fill(0);
    let diagonals2=new Array(2*n).fill(0);
    function backtrack(row){
        if(row===n){
            solutions++;
            return;
        }

        for(let i=0; i<n; i++){
            if(coulumn[i]) continue;
            let diagonal1=row-i+n;
            if(diagonals1[diagonal1]) continue;
            let diagonal2=row+i;
            if(diagonals2[diagonal2]) continue;

            queens[row]=i;
            coulumn[i]=1;
            diagonals1[diagonal1]=1;
            diagonals2[diagonal2]=1;
            backtrack(row+1);
            diagonals2[diagonal2]=0;
            diagonals1[diagonal1]=0;
            coulumn[i]=0;
            queens[row]=-1;
        }
    }
    backtrack(0);
    return solutions;
};