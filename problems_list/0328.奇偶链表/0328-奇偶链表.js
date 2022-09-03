/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let odd=new ListNode(-1), even=new ListNode(-1);
    let cur1=odd, cur2=even, cur=head;
    let idx=1;
    while(cur){
        if(idx%2){
            cur1.next=cur;
            cur1=cur1.next;
        }else{
            cur2.next=cur;
            cur2=cur2.next;
        }
        idx++;
        cur=cur.next;
    }
    cur1.next=null;
    cur2.next=null;
    // if(idx%2) cur2.next=null;
    // else cur1.next=null;

    cur1.next=even.next;
    return odd.next;
};