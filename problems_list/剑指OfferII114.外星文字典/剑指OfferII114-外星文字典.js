var alienOrder = function(words) {
    let pre=new Map(), post=new Map(), n=words.length;
    let letters=new Set(words.join('').split(''));
    for(let ch of letters){
        pre.set(ch, new Set());
        post.set(ch, new Set());
    }

    function setSort(str1, str2){
        let mnl=Math.min(str1.length, str2.length);
        for(let i=0; i<mnl; i++){
            if(str1[i]!==str2[i]){
                pre.get(str1[i]).add(str2[i]);
                post.get(str2[i]).add(str1[i]);
                return true;
            }
        }
        return str1.length<=str2.length;
    }

    for(let i=0; i<n-1; i++){
        let res=setSort(words[i], words[i+1]);
        // È¥³ý³¤¶ÌµÄ´íÎó
        if(!res) return "";
    }
    
    let ans="", cnt=Array.from(letters).length, visited=new Array(26).fill(0);
    for(let i=0; i<cnt; i++){
        for(let j=0; j<26; j++){
            let ch=String.fromCharCode(97+j);
            if(letters.has(ch) && Array.from(post.get(ch)).length===0){
                if(visited[j]===1) return "";
                visited[j]=1;
                letters.delete(ch);
                ans+=ch;
                console.log(ans);
                let ps=pre.get(ch);
                for(let c of ps){
                    post.get(c).delete(ch);
                }
            }
        }
    }
    return ans.length!==cnt?"":ans;
};