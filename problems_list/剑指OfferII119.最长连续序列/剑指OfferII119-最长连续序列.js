/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var st=new Set();
    for(let num of nums){
        st.add(num);
    }

    let ans=0, curLen=0;
    for(let num of st){
        if(!st.has(num-1)){
            curLen=1;
            let curNum=num;
            curLen=1;
            while(st.has(curNum+1)){
                curNum=curNum+1;
                curLen++;
            }
            ans=Math.max(ans, curLen);
        }
    }
    return ans;
};