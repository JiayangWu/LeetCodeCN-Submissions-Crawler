/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.mnStk=[];
    this.stk=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stk.push(x);
    if(this.mnStk.length===0 || this.mnStk[this.mnStk.length-1]>=x) this.mnStk.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stk.pop()===this.mnStk[this.mnStk.length-1]) this.mnStk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.stk.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.mnStk[this.mnStk.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */