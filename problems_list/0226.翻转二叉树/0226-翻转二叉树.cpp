/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* dfs(TreeNode* root){
        if(!root) return nullptr;

        TreeNode *rl=dfs(root->right);
        TreeNode *rr=dfs(root->left);
        root->left=rl;
        root->right=rr;
        return root;
    }
    TreeNode* invertTree(TreeNode* root) {
        return dfs(root);
    }
};