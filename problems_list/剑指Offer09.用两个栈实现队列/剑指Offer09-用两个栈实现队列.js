var CQueue = function() {
    this.prev=[], this.tail=[];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.tail.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.prev.length) return this.prev.pop();
    else{
        if(this.tail.length===0) return -1;
        while(this.tail.length){
            let val=this.tail.pop();
            this.prev.push(val);
        }
        return this.prev.pop();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */