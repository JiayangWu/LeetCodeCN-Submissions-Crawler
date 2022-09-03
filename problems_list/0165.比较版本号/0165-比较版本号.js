/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let va1=version1.split('.'), va2=version2.split('.');
    let mxl=Math.max(va1.length, va2.length);
    let v1=0, v2=0;
    for(let i=0; i<mxl; i++){
        v1=(i<va1.length)?parseInt(va1[i]):0;
        v2=(i<va2.length)?parseInt(va2[i]):0;

        if(v1>v2) return 1;
        else if(v1<v2) return -1;
    }
    return 0;
};