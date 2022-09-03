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
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
        return root;
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
        return root;
    }
    if (root.val === key) {
        if (!root.left && !root.right) {
            return null;
        }
        if (!root.right) {
            return root.left;
        }
        if (!root.left) {
            return root.right;
        }
        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }
        root.right = deleteNode(root.right, successor.val);
        successor.right = root.right;
        successor.left = root.left;
        return successor;
    }
    return root;
};