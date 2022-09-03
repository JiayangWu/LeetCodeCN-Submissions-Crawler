class CBTInserter {
public:
    TreeNode*mRoot;
    queue<TreeNode*>que;
    TreeNode*cur;
    CBTInserter(TreeNode* root) {
        mRoot=root;
        que.push(root);
        while(que.empty()==false){
            TreeNode*node=que.front();que.pop();
            if(node->left)que.push(node->left);
            if(node->right)que.push(node->right);
            if(node->left==nullptr||node->right==nullptr){
                cur=node;
                break;
            }
        }
    }
    int insert(int val) {
        if(cur->left==nullptr){
            cur->left=new TreeNode(val);
            que.push(cur->left);
        }else if(cur->right==nullptr){
            cur->right=new TreeNode(val);
            que.push(cur->right);
        }
        int ans=cur->val;
        if(cur->right){
            cur=que.front();que.pop();
        }
        return ans;
    }
    TreeNode* get_root() {
        return mRoot;
    }
};