/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    const freq=new Map();
    const count=new Map();
    let res=0, maxFreq=0;
    for(let i=0; i<nums.length; i++){
        // count没有记录
        if(!count.has(nums[i])){
            count.set(nums[i], 0);
        }
        // 删除之前的记录
        if(count.get(nums[i])>0){
            freq.set(count.get(nums[i]), freq.get(count.get(nums[i]))-1);
        }
        // 更新当前的记录
        count.set(nums[i], count.get(nums[i])+1);
        // 获取当前最大频率
        maxFreq=Math.max(maxFreq, count.get(nums[i]));
        // 相当于设置为0，避免下一步为undefined
        if(!freq.has(count.get(nums[i]))){
            freq.set(count.get(nums[i]), 0);
        }
        freq.set(count.get(nums[i]), freq.get(count.get(nums[i]))+1);
        const ok= maxFreq===1 || 
                freq.get(maxFreq)*maxFreq+freq.get(maxFreq-1)*(maxFreq-1) === i+1 && freq.get(maxFreq) ===1 ||
                freq.get(maxFreq)*maxFreq+1===i+1;
        if(ok){
            res=Math.max(res, i+1);
        }
    }
    return res;
};