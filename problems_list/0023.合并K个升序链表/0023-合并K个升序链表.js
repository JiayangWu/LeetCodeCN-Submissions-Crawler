/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var merge=function(la, lb){
    if(la===null || lb===null) return la?la:lb;
    let dummy=new ListNode(0);
    let cur=dummy, ap=la, bp=lb;
    while(ap && bp){
        if(ap.val<bp.val){
            cur.next=ap;
            ap=ap.next;
        }else{
            cur.next=bp;
            bp=bp.next;
        }
        cur=cur.next;
    }
    cur.next=(ap?ap:bp);
    return dummy.next;
}

var mergeKLists = function(lists) {
    let ans=null;
    for(let i=0; i<lists.length; i++){
        ans=merge(ans, lists[i]);
    }
    return ans;
};