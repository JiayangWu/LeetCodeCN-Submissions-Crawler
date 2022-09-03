/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const n=s.length;
    const pos=new Array(1<<5).fill(-1);
    let ans=0, status=0;
    pos[0]=0;
    for(let i=0; i<n; i++){
        const ch=s.charAt(i);
        if(ch==='a'){
            status^=1<<0;
        }else if(ch==='e'){
            status^=1<<1;
        }else if(ch==='i'){
            status^=1<<2;
        }else if(ch==='o'){
            status^=1<<3;
        }else if(ch==='u'){
            status^=1<<4;
        }

        if(~pos[status]){
            ans=Math.max(ans, i-pos[status]+1);
        }else{
            pos[status]=i+1;
        }
    }
    return ans;
};