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
    bool evaluateTree(TreeNode* root) {
        if(root->left==nullptr && root->right==nullptr) return root->val;
        
        bool res=false;
        if(root->val==2){
            res=evaluateTree(root->left)|evaluateTree(root->right);
        }else{
            res=evaluateTree(root->left)&evaluateTree(root->right);
        }
        return res;
    }
};