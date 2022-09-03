/**
 * @param {number} n
 * @return {string[]}
 */
const dfs=function(open, close, ans, cur){
    if(open===0 && close===0){
        ans.push(cur.split('').join(''));
        return;
    }
    if(open){
        cur+='(';
        open--;
        dfs(open, close, ans, cur);
        open++;
        cur=cur.substring(0, cur.length-1);
    }

    if(close && close>open){
        cur+=')';
        close--;
        dfs(open, close, ans, cur);
        close++;
        cur=cur.substring(0, cur.length-1);
    }
}
var generateParenthesis = function(n) {
    let ans=[];
    dfs(n, n, ans, "");
    return ans;
};
