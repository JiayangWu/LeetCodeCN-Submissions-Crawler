const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
var cutOffTree = function(forest) {
    const trees = [];
    const row = forest.length;
    const col = forest[0].length;
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (forest[i][j] > 1) {
                trees.push([i, j]);
            }
        }
    }
    trees.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]]);

    let cx = 0;
    let cy = 0;
    let ans = 0;
    for (let i = 0; i < trees.length; ++i) {
        let steps = bfs(forest, cx, cy, trees[i][0], trees[i][1]);
        if (steps === -1) {
            return -1;
        }
        ans += steps;
        cx = trees[i][0];
        cy = trees[i][1];
    }
    return ans;
};

const bfs = (forest, sx, sy, tx, ty) => {
    if (sx === tx && sy === ty) {
        return 0;
    }

    const row = forest.length;
    const col = forest[0].length;
    let step = 0;
    const queue = [];
    const visited = new Array(row).fill(0).map(() => new Array(col).fill(0));
    queue.push([sx, sy]);
    visited[sx][sy] = true;
    while (queue.length) {
        step++;
        const sz = queue.length;
        for (let i = 0; i < sz; ++i) {
            const cell = queue.shift();
            const cx = cell[0], cy = cell[1];
            for (let j = 0; j < 4; ++j) {
                const nx = cx + dirs[j][0];
                const ny = cy + dirs[j][1];
                if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
                    if (!visited[nx][ny] && forest[nx][ny] > 0) {
                        if (nx === tx && ny === ty) {
                            return step;
                        }
                        queue.push([nx, ny]);
                        visited[nx][ny] = true;
                    }
                }
            }
        }
    }
    return -1;
}