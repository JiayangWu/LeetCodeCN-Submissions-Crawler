/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast=head, slow=head;
    for(let i=1; i<=k; i++) fast=fast.next;
    while(fast){
        slow=slow.next;
        fast=fast.next;
    }
    return slow;
};