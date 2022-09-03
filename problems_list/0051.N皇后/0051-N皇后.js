/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let solutions=[];
    let queens=new Array(n).fill(-1);
    let coulumn=new Set();
    let diagonals1=new Set();
    let diagonals2=new Set();
    function backtrack(row){
        if(row===n){
            let borad=generateBorad();
            solutions.push(borad);
            return;
        }

        for(let i=0; i<n; i++){
            if(coulumn.has(i)) continue;
            let diagonal1=row-i;
            if(diagonals1.has(diagonal1)) continue;
            let diagonal2=row+i;
            if(diagonals2.has(diagonal2)) continue;

            queens[row]=i;
            coulumn.add(i);
            diagonals1.add(diagonal1);
            diagonals2.add(diagonal2);
            backtrack(row+1);
            diagonals2.delete(diagonal2);
            diagonals1.delete(diagonal1);
            coulumn.delete(i);
            queens[row]=-1;
        }
    }
    function generateBorad(){
        let borad=[];
        let tmp=queens;
        for(let i=0; i<n; i++){
            let cur=new Array(n).fill('.');
            cur[tmp[i]]='Q';
            borad.push(cur.join(''));
        }
        return borad;
    }
    backtrack(0);
    return solutions;
};