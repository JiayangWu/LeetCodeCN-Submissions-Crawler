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
    ListNode* sortList(ListNode* head) {
        return sortList(head, nullptr);
    }
    ListNode* sortList(ListNode* head, ListNode* tail){
        if(head==nullptr){
            return head;
        }
        if(head->next==tail){
            head->next=nullptr;
            return head;
        }

        ListNode* slow=head, *fast=head;
        while(fast!=tail){
            slow=slow->next;
            fast=fast->next;
            if(fast!=tail){
                fast=fast->next;
            }
        }
        ListNode* mid=slow;
        return merge(sortList(head, mid), sortList(mid,tail));
    }
    ListNode* merge(ListNode* h1, ListNode* h2){
        ListNode* dummy=new ListNode();
        ListNode *tmp=dummy, *tmp1=h1, *tmp2=h2;

        while(tmp1!=nullptr && tmp2!=nullptr){
            if(tmp1->val<tmp2->val){
                tmp->next=tmp1;
                tmp1=tmp1->next;
            }else{
                tmp->next=tmp2;
                tmp2=tmp2->next;
            }
            tmp=tmp->next;
        }
        if(tmp1!=nullptr) tmp->next=tmp1;
        if(tmp2!=nullptr) tmp->next=tmp2;
        return dummy->next;
    }
};