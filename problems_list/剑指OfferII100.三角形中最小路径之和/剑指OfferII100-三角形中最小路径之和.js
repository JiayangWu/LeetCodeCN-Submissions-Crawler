/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var m=triangle.length;
    var path=new Array(m).fill(0).map(()=>new Array(m));
    path[0][0]=triangle[0][0];
    for(var i=1; i<m; i++){
        for(var j=0; j<=i; j++){
            if(j==0){
                path[i][j]=path[i-1][j]+triangle[i][j]; 
            }else if(j==i){
                path[i][j]=path[i-1][j-1]+triangle[i][j];
            }else{
                path[i][j]=Math.min(path[i-1][j-1], path[i-1][j])+triangle[i][j];
            }
        }
    }

    var ans=10010;
    for(var j=0; j<m; j++){
        ans=Math.min(path[m-1][j], ans);
    }
    return ans;
};