var stringMatching = function(words) {
    let nexts=[];
    let wn=words.length;
    let getNext=function(p){
        p=' '+p;
        const pn=p.length;
        let ne=new Array(pn).fill(0);
        for(let i=2, j=0; i<=pn-1; i++){
            while(j && p[i]!==p[j+1]) j=ne[j];
            if(p[i]===p[j+1]) j++;
            ne[i]=j;
        }
        nexts.push([...ne]);
    }

    for(let word of words) getNext(word);
    // console.log(nexts);

    let kmp=function(i, j){
        let s=' '+words[i], p=' '+words[j], ne=nexts[j];
        for(let k=1, l=0; k<=s.length-1; k++){
            while(l && s[k]!==p[l+1]) l=ne[l];
            if(s[k]===p[l+1]) l++;
            if(l===p.length-1){
                return true;
            }
        }
        return false;
    }

    let ans=new Set();
    for(let i=0; i<wn; i++){
        for(let j=0; j<wn; j++){
            if(i!==j && words[i].length>=words[j].length && kmp(i, j)){
                ans.add(words[j]);
            }
        }
    }
    // let aans=new Array(ans);
    return Array.from(ans);
};