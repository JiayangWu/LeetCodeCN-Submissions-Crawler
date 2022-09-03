/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var cnt=new Map()
    for(var i=0; i<nums.length; i++){
        cnt.set(nums[i], (cnt.get(nums[i]) || 0)+1)
    }

    var mini=new MinPriorityQueue()
    for(const [key, val] of cnt.entries()){
        if(mini.size()<k){
            mini.enqueue(key, val)
        }else{
            if(val>mini.front().priority){
                mini.dequeue()
                mini.enqueue(key, val)
            }
        }
    }
    return mini.toArray().map((item)=>item.element)
};