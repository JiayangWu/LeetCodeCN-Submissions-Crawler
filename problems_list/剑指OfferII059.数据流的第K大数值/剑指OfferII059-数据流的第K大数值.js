/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k=k
    this.mini=new MinPriorityQueue()
    for(num of nums){
        // console.log(num)
        if(this.mini.size()>=k){
            if(num>this.mini.front().element){
                this.mini.dequeue()
                this.mini.enqueue(num)
            }
        }else{
            this.mini.enqueue(num)
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.mini.size()==this.k && val>this.mini.front().element){
        // console.log('front:', this.mini.front())
        this.mini.dequeue()
        this.mini.enqueue(val)
    }else if(this.mini.size()<this.k){
        this.mini.enqueue(val)
    }

    return this.mini.front().element
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */