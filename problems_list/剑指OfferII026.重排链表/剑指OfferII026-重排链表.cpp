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
    void reorderList(ListNode* head) {
        if(head==nullptr) return;
        vector<ListNode*> nodes;
        ListNode* node=head;
        while(node!=nullptr){
            nodes.push_back(node);
            node=node->next;
        }

        int l=0, r=nodes.size()-1;
        while(l<r){
            nodes[l]->next=nodes[r];
            l++;
            if(l==r) break;
            nodes[r]->next=nodes[l];
            r--;
        }
        nodes[l]->next=nullptr;
        return;
    }
};