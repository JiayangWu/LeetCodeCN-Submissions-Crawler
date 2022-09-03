/**
 * @description 连接两点
 * @param {LinkNode} leftNode
 * @param {LinkNode} rightNode
 */
function connect(leftNode, rightNode) {
  leftNode.right = rightNode;
  rightNode.left = leftNode;
}

/**
 * @description 两点中插入一点
 * @param {LinkNode} leftNode
 * @param {LinkNode} rightNode
 * @param {LinkNode} insertNode
 */
function insert(leftNode, rightNode, insertNode) {
  leftNode.right = insertNode;
  rightNode.left = insertNode;
  insertNode.left = leftNode;
  insertNode.right = rightNode;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = {
    val: -1,
    left: null,
    right: null
  };
  this.head.left = this.head.right = this.head;
  this.array = [];
  this.capacity = capacity;
  this.linkLength = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.array[key];
  if (node) {
    if (node.inLinkList) {
      const head = this.head;
      connect(node.left, node.right);
      insert(head, head.right, node);
      return node.val;
    } else {
      this.array[key] = undefined;
      return -1;
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const head = this.head;
  if (this.array[key] && this.array[key].inLinkList) {
    // 原来有值的
    const node = this.array[key];
    // 更新值
    node.val = value;
    // 提到链表头
    connect(node.left, node.right);
    insert(head, head.right, node);
  } else {
    // 超过长度，去掉最末尾的元素
    if (this.linkLength === this.capacity) {
      head.left.inLinkList = false;
      connect(head.left.left, head);
      this.linkLength--;
    }
    // 原来没值
    // 生成节点
    const node = {
      val: value,
      left: null,
      right: null,
      inLinkList: true
    };
    this.array[key] = node;
    this.linkLength++;
    insert(head, head.right, node);
  }
};