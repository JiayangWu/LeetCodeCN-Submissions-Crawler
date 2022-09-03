/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let ans=new ListNode(), cur=ans;
    while(list1 || list2){
        let v1=list1?list1.val:110;
        let v2=list2?list2.val:110;
        if(v1<v2){
            cur.next=list1;
            list1=list1.next;
            cur=cur.next;
        }else{
            cur.next=list2;
            list2=list2.next;
            cur=cur.next;
        }
    }
    return ans.next;
};