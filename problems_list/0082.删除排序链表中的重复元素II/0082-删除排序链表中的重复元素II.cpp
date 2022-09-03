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
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* dummy=new ListNode(-1, head);
        ListNode* cur=dummy;
        while(cur->next && cur->next->next){
            if(cur->next->val==cur->next->next->val){
                int x=cur->next->val;
                while(cur->next && cur->next->val==x){
                    ListNode* node=cur->next;
                    cur->next=cur->next->next;
                    delete node;
                }
            }else{
                cur=cur->next;
            }
        }
        return dummy->next;
    }
};