/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.arr=[0];
    this.rects=rects;
    for(const rect of rects){
        let a=rect[0], b=rect[1], x=rect[2], y=rect[3];
        this.arr.push(this.arr[this.arr.length-1]+(x-a+1)*(y-b+1));
    }
};

const binarySearch=(arr, target)=>{
    let l=0, r=arr.length-1;
    while(l<=r){
        const m=(l+r)>>1;
        if(arr[m]==target) return m+1;
        else if(arr[m]>target) r=m-1;
        else l=m+1;
    }
    return l;
}
/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let k=Math.floor(Math.random()*this.arr[this.arr.length-1]);
    const idx=binarySearch(this.arr, k)-1;
    k-=this.arr[idx];
    const rect=this.rects[idx];
    const a=rect[0], b=rect[1], y=rect[3];
    const col=y-b+1;
    const da=Math.floor(k/col);
    const db=k-col*da;
    return [a+da, b+db];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */