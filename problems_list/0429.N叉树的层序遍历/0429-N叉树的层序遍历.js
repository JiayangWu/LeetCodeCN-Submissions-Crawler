/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let ans=[];
    let queue=[root];
    while(queue.length){
        let n=queue.length;
        let layer=[];
        for(let i=0; i<n; i++){
            let node=queue.shift();
            layer.push(node.val);
            for(let ch of node.children){
                queue.push(ch);
            }
        }
        ans.push(layer);
    }
    return ans;
};