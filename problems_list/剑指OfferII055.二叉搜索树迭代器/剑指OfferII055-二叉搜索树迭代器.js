/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.i=0;
    this.arr=[];
    this.inOrder(root, this.arr);
};

BSTIterator.prototype.inOrder=function(root, arr){
    if(root!=null){
        this.inOrder(root.left, arr)
        arr.push(root.val)
        this.inOrder(root.right, arr)
    }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[this.i++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.i<this.arr.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */