/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;
  // 方向数组
  let directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  // 深度优先搜索
  const dfs = (i, j) => {
    // 超出边界 或者本身就已经是海水了
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == 0) return;
    // 淹没它 避免重复访问
    grid[i][j] = 0;
    for (let dir of directions) dfs(dir[0] + i, dir[1] + j);
  };
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};