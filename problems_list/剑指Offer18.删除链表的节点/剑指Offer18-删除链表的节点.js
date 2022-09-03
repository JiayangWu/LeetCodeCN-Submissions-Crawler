/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let dummy=new ListNode(0);
    dummy.next=head;
    let pre=dummy;
    while(pre.next){
        let nxt=pre.next, nnxt=pre.next.next;
        if(nxt.val===val){
            pre.next=nnxt;
            break;
        }
        pre=pre.next;
    }
    return dummy.next;
};