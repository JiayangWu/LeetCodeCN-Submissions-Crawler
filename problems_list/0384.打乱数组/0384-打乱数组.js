/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums=nums;
    this.original=nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums=this.original;
    return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffled=new Array(this.nums.length).fill(0);
    let list=this.nums.slice();
    for(let i=0; i<this.nums.length; i++){
        const j=Math.floor(list.length*Math.random());
        shuffled[i]=list.splice(j, 1);
    }
    return shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */