class Solution {
public:
    bool check(TreeNode *o, TreeNode *t) {
        if (!o && !t) {
            return true;
        }
        if ((o && !t) || (!o && t) || (o->val != t->val)) {
            return false;
        }
        return check(o->left, t->left) && check(o->right, t->right);
    }


    bool isSubtree(TreeNode *s, TreeNode *t) {
        if(!s){
            return false;
        }
        return check(s, t) || isSubtree(s->left, t) || isSubtree(s->right, t);
    }
};