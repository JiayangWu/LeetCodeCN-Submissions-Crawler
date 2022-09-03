var movesToChessboard = function(board) {
    const n = board.length;
    let rowMask = 0, colMask = 0;        

    /* 检查棋盘的第一行与第一列 */
    for (let i = 0; i < n; i++) {
        rowMask |= (board[0][i] << i);
        colMask |= (board[i][0] << i);
    }
    const reverseRowMask = ((1 << n) - 1) ^ rowMask;
    const reverseColMask = ((1 << n) - 1) ^ colMask;
    let rowCnt = 0, colCnt = 0;
    for (let i = 0; i < n; i++) {
        let currRowMask = 0;
        let currColMask = 0;
        for (let j = 0; j < n; j++) {
            currRowMask |= (board[i][j] << j);
            currColMask |= (board[j][i] << j);
        }
        /* 检测每一行的状态是否合法 */
        if (currRowMask !== rowMask && currRowMask !== reverseRowMask) {
            return -1;
        } else if (currRowMask === rowMask) {
            /* 记录与第一行相同的行数 */
            rowCnt++;
        }
        /* 检测每一列的状态是否合法 */
        if (currColMask !== colMask && currColMask !== reverseColMask) {
            return -1;
        } else if (currColMask === colMask) {
            /* 记录与第一列相同的列数 */
            colCnt++;
        }
    }
    const rowMoves = getMoves(rowMask, rowCnt, n);
    const colMoves = getMoves(colMask, colCnt, n);
    return (rowMoves == -1 || colMoves == -1) ? -1 : (rowMoves + colMoves); 
};

const getMoves = (mask, count, n) => {
    const ones = bitCount(mask);
    if ((n & 1) === 1) {
        /* 如果 n 为奇数，则每一行中 1 与 0 的数目相差为 1，且满足相邻行交替 */
        if (Math.abs(n - 2 * ones) !== 1 || Math.abs(n - 2 * count) !== 1 ) {
            return -1;
        }
        if (ones === (n >> 1)) {
            /* 以 0 为开头的最小交换次数 */
            return Math.floor(n / 2) - bitCount(mask & 0xAAAAAAAA);
        } else {
            return Math.floor((n + 1) / 2) - bitCount(mask & 0x55555555);
        }
    } else { 
        /* 如果 n 为偶数，则每一行中 1 与 0 的数目相等，且满足相邻行交替 */
        if (ones !== (n >> 1) || count !== (n >> 1)) {
            return -1;
        }
        /* 找到行的最小交换次数 */
        const count0 = Math.floor(n / 2) - bitCount(mask & 0xAAAAAAAA);
        const count1 = Math.floor(n / 2) - bitCount(mask & 0x55555555);  
        return Math.min(count0, count1);
    }
}

const bitCount = (num) => {
    return num.toString(2).split('0').join('').length
}