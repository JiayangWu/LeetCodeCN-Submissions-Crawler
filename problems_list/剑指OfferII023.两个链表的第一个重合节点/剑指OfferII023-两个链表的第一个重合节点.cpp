/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
       ListNode *pa=headA, *pb=headB;
       int cnta=0, cntb=0;
       while(pa!=pb){
           if(pa->next) pa=pa->next;
           else if(cnta==0) pa=headB, cnta++;
           else return nullptr;

           if(pb->next) pb=pb->next;
           else if(cntb==0) pb=headA, cntb++;
           else return nullptr;
       }
       return pa;
    }
};