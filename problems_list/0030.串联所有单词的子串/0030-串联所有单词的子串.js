var findSubstring = function(s, words) {
    let wsl=words[0].length, wl=words.length, wm={};
    // 哈希统计
    for(const w of words) wm[w]=(wm[w]||0)+1;

    let i=0, l=0, r=0, count=0, res=[], win={};
    // 不用超出wsl，超出也只是重复前面的搜索
    while(i<wsl){
        l=i, r=i, count=0, win={};
        // 找到合适的一段
        while(r<=s.length-wsl){
            let ss=s.substring(r, r+wsl);
            r+=wsl;
            // 没有这个单词直接跳过
            if(!wm[ss]){
                win={};
                count=0;
                l=r;
            }else{
                win[ss]=(win[ss]||0)+1;
                count++;
                // 对应单词超过了，直接移动左边界
                while(win[ss]>wm[ss]){
                    let sl=s.substring(l, l+wsl);
                    win[sl]=(win[sl]||0)-1;
                    count--;
                    l+=wsl;
                }
                if(count===wl) res.push(l);
            }
        }
        i++;
    }
    return res;
};