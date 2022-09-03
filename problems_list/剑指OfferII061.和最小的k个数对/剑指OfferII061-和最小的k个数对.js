/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    var mini=new MinPriorityQueue({compare:(a,b)=> (nums1[a[0]] + nums2[a[1]]) - (nums1[b[0]] + nums2[b[1]])})
    var n1=nums1.length, n2=nums2.length
    for(var i=0; i<Math.min(n1, k); i++) mini.enqueue([i,0])

    var ans=[]
    while(ans.length<k && !mini.isEmpty()){
        var [i, j]=mini.front()
        mini.dequeue()
        ans.push([nums1[i], nums2[j]])
        if(j+1<n2) mini.enqueue([i, j+1])
    }
    return ans
};