/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let n=emails.length;
    let st=new Set();
    for(let i=0; i<n; i++){
        let [pre, domain]=emails[i].split('@');
        let addIndex=pre.search(/\+/);
        if(addIndex!==-1) pre=pre.substring(0, addIndex);
        pre=pre.split('.').join('');
        pre=pre+'@'+domain;
        st.add(pre);
    }
    return Array.from(st).length;
};