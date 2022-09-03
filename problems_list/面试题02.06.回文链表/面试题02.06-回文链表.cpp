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
    // void reverse(ListNode* head){
    //     ListNode *pre=nullptr;
    //     while(head){
    //         ListNode* nxt=head->next;
    //         head->next=pre;
    //         pre=head;
    //         head=nxt;
    //     }
    //     return pre;
    // }
    bool isPalindrome(ListNode* head) {
        // ListNode *p=reverse(head);
        ListNode *cur=head;
        vector<int> rec;
        while(cur){
            rec.emplace_back(cur->val);
            cur=cur->next;
        }
        int n=rec.size();
        for(int i=0; i<n/2; i++){
            if(rec[i]!=rec[n-i-1]) return false;
        }
        return true;
    }
};