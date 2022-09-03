/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    vector<vector<int>> levelOrder(Node* root) {
        if(root==nullptr){
            return {};
        }

        vector<vector<int>> ans;
        queue<Node*> q;
        q.push(root);
        while(!q.empty()){
            int len=q.size();
            vector<int> rec;
            for(int i=0; i<len; i++){
                Node* node=q.front();
                q.pop();
                rec.push_back(node->val);
                vector<Node*> child=node->children;
                for(auto nc:child){
                    q.push(nc);
                }
            }
            ans.push_back(rec);
        }
        return ans;
    }
};