var MyCalendarThree = function() {
    this.cnt=new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    let ans=0;
    let maxBook=0;
    if(!this.cnt.has(start)) this.cnt.set(start, 1);
    else this.cnt.set(start, this.cnt.get(start)+1);

    if(!this.cnt.has(end)) this.cnt.set(end, -1);
    else this.cnt.set(end, this.cnt.get(end)-1);

    let arr=Array.from(this.cnt).sort((a, b)=>a[0]-b[0]);
    // console.log(arr);
    for(let i=0; i<arr.length; i++){
        maxBook+=arr[i][1];
        ans=Math.max(maxBook, ans);
    }
    return ans;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */