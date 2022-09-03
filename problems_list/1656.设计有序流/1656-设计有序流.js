/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.n=n;
    this.ptr=1;
    this.arr=new Array(n+1).fill("");
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let ans=[];
    this.arr[idKey]=value;
    while(this.ptr<=this.n && this.arr[this.ptr]!==""){
        // console.log(this.arr[this.ptr])
        ans.push(this.arr[this.ptr]);
        this.ptr++;
    }
    return ans;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */