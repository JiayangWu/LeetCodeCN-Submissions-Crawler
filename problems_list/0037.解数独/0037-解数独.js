var columns = [],//保存每一行的数字
    rows = [],//保存每一列的数字
    grids = [],//保存每一个九宫格的数字
    f = 0;//结束标记

// 初始化，遍历已有填充值
var init = function(board){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 获取值
      const value = board[i][j];
      // 先判断非 . 元素
      if (value !== '.') {
          rows[i].push(value);
          columns[j].push(value);
          //九宫格下标
          const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          grids[gridIndex].push(value);
        } 
      }
    }
};
//检查能否填入该位置
var check = function(i,j,board,value){
    const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 对应的盒子
    if (rows[i].includes(value) || columns[j].includes(value) || grids[gridIndex].includes(value)) {
        return false;
    }
    return true;
};
//遍历填充数独
var fillBoard = function(i,j,board){
    //已填满
    if(f == 1 || i > 8) {
        return ;
    }
    //需要填充
    if(board[i][j] == '.'){
        //遍历9个数字
        for(let num = 1; num < 10; num++){
            if(f == 0 && check(i,j,board,num.toString())){
                rows[i].push(num.toString());//更新列
                columns[j].push(num.toString());//更新行
                const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                grids[gridIndex].push(num.toString());//更新小九宫格
                board[i][j] = num.toString();//填入数字
                if(i == 8 && j == 8) {//已填满
                    f = 1;
                    return;
                }else if(j == 8) fillBoard(i + 1,0,board);//换行
                else fillBoard(i,j+1,board);//换列
                 if(f == 0){//回溯
                    rows[i].pop();//更新列
                    columns[j].pop();//更新行
                    grids[gridIndex].pop();//更新小九宫格
                    board[i][j] = '.';//更新大九宫格
                }
            }
        }
    }else if(i == 8 && j == 8) {//遍历结束
        f = 1;
        return;
    }else if(j == 8) fillBoard(i + 1,0,board);//换行
    else fillBoard(i,j+1,board);//换列
    return board;
};
var solveSudoku = function(board) {
    f = 0;
    for(let i = 0; i < 9; i++){
        columns[i] = [];
        rows[i] = [];
        grids[i] = [];
    }
    init(board);  
    board = fillBoard(0,0,board);
};