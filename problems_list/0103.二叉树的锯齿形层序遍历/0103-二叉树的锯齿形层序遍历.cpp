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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        if(root==nullptr) return {};
        vector<vector<int>> ans;
        queue<TreeNode*> q;
        q.push(root);

        int layer=0;
        while(!q.empty()){
            int len=q.size();
            vector<int> tmp;
            for(int i=0; i<len; i++){
                TreeNode* node=q.front();
                q.pop();
                tmp.push_back(node->val);
                if(node->left) q.push(node->left);
                if(node->right) q.push(node->right);
            }
            if(layer%2) reverse(tmp.begin(), tmp.end());
            ans.push_back(tmp);
            layer++;
        }
        return ans;
    }
};