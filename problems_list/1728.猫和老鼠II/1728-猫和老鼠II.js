const MOUSE_TURN = 0, CAT_TURN = 1;
const UNKNOWN = 0, MOUSE_WIN = 1, CAT_WIN = 2;
const MAX_MOVES = 1000;
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var canMouseWin = function(grid, catJump, mouseJump) {
    this.rows = grid.length;
    this.cols = grid[0].length;
    let startMouse = -1, startCat = -1;

    const getPos = (row, col) => {
        return row * this.cols + col;
    };

    const getPrevStates = (mouse, cat, turn) => {
        const prevStates = [];
        const mouseRow = Math.floor(mouse / this.cols), mouseCol = mouse % this.cols;
        const catRow = Math.floor(cat / this.cols), catCol = cat % this.cols;
        const prevTurn = turn === MOUSE_TURN ? CAT_TURN : MOUSE_TURN;
        const maxJump = prevTurn === MOUSE_TURN ? mouseJump : catJump;
        const startRow = prevTurn === MOUSE_TURN ? mouseRow : catRow;
        const startCol = prevTurn === MOUSE_TURN ? mouseCol : catCol;
        prevStates.push([mouse, cat, prevTurn]);
        for (const dir of dirs) {
            for (let i = startRow + dir[0], j = startCol + dir[1], jump = 1; i >= 0 && i < rows && j >= 0 && j < this.cols && grid[i].charAt(j) !== '#' && jump <= maxJump; i += dir[0], j += dir[1], jump++) {
                const prevMouseRow = prevTurn === MOUSE_TURN ? i : mouseRow;
                const prevMouseCol = prevTurn === MOUSE_TURN ? j : mouseCol;
                const prevCatRow = prevTurn === MOUSE_TURN ? catRow : i;
                const prevCatCol = prevTurn === MOUSE_TURN ? catCol : j;
                const prevMouse = getPos(prevMouseRow, prevMouseCol);
                const prevCat = getPos(prevCatRow, prevCatCol);
                prevStates.push([prevMouse, prevCat, prevTurn]);
            }
        }
        return prevStates;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            const c = grid[i][j];
            if (c === 'M') {
                startMouse = getPos(i, j);
            } else if (c === 'C') {
                startCat = getPos(i, j);
            } else if (c === 'F') {
                food = getPos(i, j);
            }
        }
    }
    const total = rows * this.cols;
    const degrees = new Array(total).fill(0).map(() => new Array(total).fill(0).map(() => new Array(2).fill(0)));
    const results = new Array(total).fill(0).map(() => new Array(total).fill(0).map(() => new Array(2).fill(0).map(() => new Array(2).fill(0))));
    const queue = [];
    // 计算每个状态的度
    for (let mouse = 0; mouse < total; mouse++) {
        let mouseRow = Math.floor(mouse / this.cols), mouseCol = mouse % this.cols;
        if (grid[mouseRow][mouseCol] === '#') {
            continue;
        }
        for (let cat = 0; cat < total; cat++) {
            let catRow = Math.floor(cat / this.cols), catCol = cat % this.cols;
            if (grid[catRow][catCol] === '#') {
                continue;
            }
            degrees[mouse][cat][MOUSE_TURN]++;
            degrees[mouse][cat][CAT_TURN]++;
            for (const dir of dirs) {
                for (let row = mouseRow + dir[0], col = mouseCol + dir[1], jump = 1; row >= 0 && row < rows && col >= 0 && col < this.cols && grid[row][col] !== '#' && jump <= mouseJump; row += dir[0], col += dir[1], jump++) {
                    const nextMouse = getPos(row, col), nextCat = getPos(catRow, catCol);
                    degrees[nextMouse][nextCat][MOUSE_TURN]++;
                }
                for (let row = catRow + dir[0], col = catCol + dir[1], jump = 1; row >= 0 && row < rows && col >= 0 && col < this.cols && grid[row][col] !== '#' && jump <= catJump; row += dir[0], col += dir[1], jump++) {
                    const nextMouse = getPos(mouseRow, mouseCol), nextCat = getPos(row, col);
                    degrees[nextMouse][nextCat][CAT_TURN]++;
                }
            }
        }
    }
    // 猫和老鼠在同一个单元格，猫获胜
    for (let pos = 0; pos < total; pos++) {
        const row = Math.floor(pos / this.cols), col = pos % this.cols;
        if (grid[row][col] === '#') {
            continue;
        }
        results[pos][pos][MOUSE_TURN][0] = CAT_WIN;
        results[pos][pos][MOUSE_TURN][1] = 0;
        results[pos][pos][CAT_TURN][0] = CAT_WIN;
        results[pos][pos][CAT_TURN][1] = 0;
        queue.push([pos, pos, MOUSE_TURN]);
        queue.push([pos, pos, CAT_TURN]);
    }
    // 猫和食物在同一个单元格，猫获胜
    for (let mouse = 0; mouse < total; mouse++) {
        const mouseRow = Math.floor(mouse / this.cols), mouseCol = mouse % this.cols;
        if (grid[mouseRow][mouseCol] === '#' || mouse === food) {
            continue;
        }
        results[mouse][food][MOUSE_TURN][0] = CAT_WIN;
        results[mouse][food][MOUSE_TURN][1] = 0;
        results[mouse][food][CAT_TURN][0] = CAT_WIN;
        results[mouse][food][CAT_TURN][1] = 0;
        queue.push([mouse, food, MOUSE_TURN]);
        queue.push([mouse, food, CAT_TURN]);
    }
    // 老鼠和食物在同一个单元格且猫和食物不在同一个单元格，老鼠获胜
    for (let cat = 0; cat < total; cat++) {
        const catRow = Math.floor(cat / this.cols), catCol = cat % this.cols;
        if (grid[catRow][catCol] === '#' || cat === food) {
            continue;
        }
        results[food][cat][MOUSE_TURN][0] = MOUSE_WIN;
        results[food][cat][MOUSE_TURN][1] = 0;
        results[food][cat][CAT_TURN][0] = MOUSE_WIN;
        results[food][cat][CAT_TURN][1] = 0;
        queue.push([food, cat, MOUSE_TURN]);
        queue.push([food, cat, CAT_TURN]);
    }
    // 拓扑排序
    while (queue.length) {
        const state = queue.shift();
        const mouse = state[0], cat = state[1], turn = state[2];
        const result = results[mouse][cat][turn][0];
        const moves = results[mouse][cat][turn][1];
        const prevStates = getPrevStates(mouse, cat, turn);
        for (const prevState of prevStates) {
            const prevMouse = prevState[0], prevCat = prevState[1], prevTurn = prevState[2];
            if (results[prevMouse][prevCat][prevTurn][0] === UNKNOWN) {
                const canWin = (result === MOUSE_WIN && prevTurn === MOUSE_TURN) || (result === CAT_WIN && prevTurn === CAT_TURN);
                if (canWin) {
                    results[prevMouse][prevCat][prevTurn][0] = result;
                    results[prevMouse][prevCat][prevTurn][1] = moves + 1;
                    queue.push([prevMouse, prevCat, prevTurn]);
                } else {
                    degrees[prevMouse][prevCat][prevTurn]--;
                    if (degrees[prevMouse][prevCat][prevTurn] === 0) {
                        const loseResult = prevTurn === MOUSE_TURN ? CAT_WIN : MOUSE_WIN;
                        results[prevMouse][prevCat][prevTurn][0] = loseResult;
                        results[prevMouse][prevCat][prevTurn][1] = moves + 1;
                        queue.push([prevMouse, prevCat, prevTurn]);
                    }
                }
            }
        }
    }

    return results[startMouse][startCat][MOUSE_TURN][0] === MOUSE_WIN && results[startMouse][startCat][MOUSE_TURN][1] <= MAX_MOVES;
}