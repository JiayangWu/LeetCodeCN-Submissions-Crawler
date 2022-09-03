/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* prev;
    Node* next;
    Node* child;
};
*/

class Solution {
public:
    Node* dfs(Node* node){
        Node* cur=node;
        Node* last=nullptr;

        while(cur){
            Node* nxt=cur->next;
            if(cur->child){
                Node* childLast=dfs(cur->child);

                cur->child->prev=cur; 
                cur->next=cur->child;
                cur->child=nullptr;

                if(nxt){
                    nxt->prev=childLast;
                }
                childLast->next=nxt;
                last=childLast;
            }else{
                last=cur;
            }
            cur=nxt;
        }
        return last;
    }
    Node* flatten(Node* head) {
        dfs(head);
        return head;
    }
};