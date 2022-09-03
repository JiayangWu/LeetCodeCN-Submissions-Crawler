var widthOfBinaryTree = function(root) {
  const queue = [[root, 0]];
  let res = 0; // 全局维护最大值
  let left = 0; // 记录当前层最左边节点的计数值
  let right = 0; // 记录当前层最右边节点的计数值
  while (queue.length) {
    left = queue[0][1];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let [h, pos] = queue.shift();
      right = pos;
      if (h.left) queue.push([h.left, 2 * (pos - left)]); // 重点，优化掉左边不需要计数的部分
      if (h.right) queue.push([h.right, 2 * (pos - left) + 1]);
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}