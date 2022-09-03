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
    ListNode* reverse(ListNode* head){
        ListNode *pre=nullptr, *cur=head;
        while(cur->next){
            ListNode* nxt=cur->next;
            cur->next=pre;
            pre=cur;
            cur=nxt;
        }
        cur->next=pre;
        return cur;
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *h1=reverse(l1), *h2=reverse(l2);
        int carry=0;
        ListNode *dummy=new ListNode(-1), *pre=dummy, *cur1=h1, *cur2=h2;
        while(cur1 || cur2){
            int v1=0, v2=0;
            if(cur1) v1=cur1->val, cur1=cur1->next;
            if(cur2) v2=cur2->val, cur2=cur2->next;
            int val=v1+v2+carry;
            // cout<<v1<<" "<<v2<<" "<<carry<<endl;
            ListNode* node=new ListNode(val%10);
            pre->next=node;
            pre=pre->next;
            carry=val/10;
        }

        if(carry){
            ListNode *node=new ListNode(carry);
            pre->next=node;
        }
        ListNode* ans=reverse(dummy->next);
        return ans;
    }
};