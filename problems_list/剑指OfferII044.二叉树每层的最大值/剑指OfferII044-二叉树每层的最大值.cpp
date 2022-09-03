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
    vector<int> largestValues(TreeNode* root) {
        if(root==nullptr) return {};
        vector<int> ans;
        queue<TreeNode*> q;

        q.push(root);
        while(!q.empty()){
            int cnt=q.size();
            int mx=INT_MIN;
            for(int i=0; i<cnt; i++){
                TreeNode* node=q.front();
                q.pop();
                if(node->left) q.push(node->left);
                if(node->right) q.push(node->right);
                if(mx<node->val) mx=node->val;
            }
            ans.push_back(mx);
        }
        return ans;
    }
};