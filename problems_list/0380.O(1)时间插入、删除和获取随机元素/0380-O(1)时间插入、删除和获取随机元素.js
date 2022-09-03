var RandomizedSet = function() {
    this.arr=new Array()
    this.mp=new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.mp.has(val)){
        return false
    }else{
        this.mp.set(val, this.arr.length)
        this.arr.push(val)
    }
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.mp.has(val)){
        return false
    }
    var idx=this.mp.get(val)
    this.arr[idx]=this.arr[this.arr.length-1]
    this.mp.set(this.arr[idx], idx)
    this.arr.pop()
    this.mp.delete(val)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var rand=Math.floor(Math.random()*this.arr.length)
    return this.arr[rand]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */