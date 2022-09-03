/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverse(ListNode* root){
        ListNode* pre=nullptr;
        while(root){
            ListNode* nxt=root->next;
            root->next=pre;
            pre=root;
            root=nxt;
        }
        return pre;
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *rl1=reverse(l1);
        ListNode *rl2=reverse(l2);

        int carry=0;
        ListNode *dummy=new ListNode(0);
        ListNode *cur=dummy;
        while(rl1 || rl2){
            int val1=0, val2=0;
            if(rl1){
                val1=rl1->val;
                rl1=rl1->next;
            }
            if(rl2){
                val2=rl2->val;
                rl2=rl2->next;
            }
            int v=val1+val2+carry;
            ListNode* node=new ListNode(v%10);
            carry=v/10;
            cur->next=node;
            cur=node;
        }
        if(carry){
            ListNode* node=new ListNode(carry);
            cur->next=node;
        }
        return reverse(dummy->next);
    }
};