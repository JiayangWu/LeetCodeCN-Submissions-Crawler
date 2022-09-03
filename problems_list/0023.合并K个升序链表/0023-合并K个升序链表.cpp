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
    ListNode* merge(ListNode* a, ListNode* b){
        if(!a || !b) return a?a:b;
        ListNode *dummy=new ListNode();
        ListNode *tmp=dummy, *ap=a, *bp=b;
        while(ap!=nullptr && bp!=nullptr){
            if(ap->val<bp->val){
                tmp->next=ap;
                ap=ap->next;
            }else{
                tmp->next=bp;
                bp=bp->next;
            }
            tmp=tmp->next;
        }
        tmp->next=(ap?ap:bp);
        return dummy->next;
    }

    ListNode* mergeKLists(vector<ListNode*>& lists) {
        int n=lists.size();
        ListNode* ans=nullptr;
        for(int i=0; i<n; i++){
            ans=merge(ans, lists[i]);
        }
        return ans;
    }
};