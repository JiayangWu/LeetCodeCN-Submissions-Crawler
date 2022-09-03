// »ØËİº¯Êı
function backtrack(lists, tmpList, nums){
    if(tmpList.length === nums.length) return lists.push([...tmpList])
    for(let i = 0; i < nums.length; i++){
        if(tmpList.includes(nums[i])) continue
        tmpList.push(nums[i])
        backtrack(lists, tmpList, nums)
        tmpList.pop() //»ØËİ
    }    

}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const lists = []
    backtrack(lists, [], nums)
    return lists
};