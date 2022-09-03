var MyCalendar = function () {
  this.events = [];
};

// 查找要插入的点的最左侧边界
MyCalendar.prototype.findInsertIndex = function (start) {
  var left = 0;
  var right = this.events.length - 1;
  // 左闭右闭区间
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    // 如果要插入的区间的起始点刚好跟当前区间的起始点相同，则找到了要插入的区间位置
    if (this.events[mid][0] === start) {
      return mid;
    } else if (this.events[mid][0] < start) {
      //  在后半段中查找
      left = mid + 1;
    } else {
      // 在前半段中查找
      right = mid - 1;
    }
  }
  return left;
};

MyCalendar.prototype.book = function (start, end) {
  let index = this.findInsertIndex(start);
  if (
    // 当前要插入的区间的起始点小于要插入的区间前一个区间的结束点
    (this.events[index - 1] && start < this.events[index - 1][1]) ||
    // 当前要插入的区间的结束点大于要插入的区间的起始点
    (this.events[index] && end > this.events[index][0])
  ) {
    // 表示有重叠  则不能插入（预订）
    return false;
  }
  this.events.splice(index, 0, [start, end]);
  return true;
};