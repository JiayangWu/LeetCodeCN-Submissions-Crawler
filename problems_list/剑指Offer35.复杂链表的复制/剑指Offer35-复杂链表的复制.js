var copyRandomList = function(head) {
    if(!head) return null;
    let cur = head, preHead = new Node(), temp = preHead, map = new Map();
    while(cur) {
        temp.val = cur.val;
        temp.next = cur.next ? new Node() : null;
        map.set(cur,temp);// 把temp的在值存起来
        temp = temp.next;
        cur = cur.next;
    }
    temp = preHead;
    while(head) {
        // 通过引用地址找到对应的链表节点
        temp.random = head.random ? map.get(head.random): null;
        head = head.next;
        temp = temp.next;
    }
    return preHead;
};