class Solution {
public:
    Node* insert(Node* head, int insertVal) {
        //空的，没啥好说的
        if (!head) {
            Node* ret = new Node(insertVal);
            ret->next = ret;
            return ret;
        }
        //插入位置就两种，一种是中间，另一种是两侧。
        //先寻找两侧的值，在确定尾结点值得同时如果中间位置能插入的话那就插入返回就完事了
        Node* p = head->next;
        Node* p_pre = head;
        while (p != head) {
            if (
                (p_pre->val <= insertVal && insertVal <= p->val) ||  //情况1
                (p->val < p_pre->val && (insertVal <= p->val || insertVal >= p_pre->val))  //情况2
            ) {
                p_pre->next = new Node(insertVal, p);
                return head;
            }
            p_pre = p;
            p = p->next;
        }
        //两侧
        p_pre->next = new Node(insertVal, head);  //注意是p_pre才是链表的最后一个节点
        return head;
    }
};