/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
     
  let m = mat.length
  let n = mat[0].length
  let sortFun= function (r,c){             // 对角元素排序处理函数
    let temList = []
    while(r<m&&c<n){
        temList.push(mat[r][c])
        r++
        c++
    }
    return temList.sort(function(a,b){return a-b})  // 注意一定要有比较函数function，
    } 
  for (var i = 0;i<m;i++){             // mat数组左下方所有对角元素
      let list = sortFun(i,0)
      list.forEach((value,index)=>{mat[i+index][index]=value})
  }
  for (var i = 1;i<n;i++){             // mat数组右上方所有对角元素
      let list = sortFun(0,i)
      list.forEach((value,index)=>{mat[index][index+i]=value})
  }
  return mat
};