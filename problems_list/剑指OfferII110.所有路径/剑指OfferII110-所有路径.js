/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var stk=[], ans=[];

    const dfs=(x, target)=>{
        if(x==target){
            ans.push(stk.slice());
            return;
        }

        for(const y of graph[x]){
            stk.push(y);
            dfs(y, target);
            stk.pop();
        }
    }
    stk.push(0);
    dfs(0, graph.length-1);
    return ans;
};