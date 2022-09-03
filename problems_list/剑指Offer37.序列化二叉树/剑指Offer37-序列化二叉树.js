var serialize = function(root) {
    if(!root) return "[]";
    let q=[];
    q.push(root);
    res=[];
    while(q.length){
        let node=q.shift();
        if(node){
            res.push(node.val.toString());
            q.push(node.left);
            q.push(node.right);
        }else{
            res.push('null');
        }
    }
    return '['+res.join(',')+']';
};

var deserialize = function(data) {
    if(data==='[]') return null;
    let vals=data.substring(1, data.length-1).split(','), i=1;
    let root=new TreeNode(parseInt(vals[0]));
    let q=[root];
    while(q.length){
        let node=q.shift();
        if(i<vals.length && vals[i]!=="null"){
            node.left=new TreeNode(parseInt(vals[i]));
            q.push(node.left);
        }
        i++;

        if(i<vals.length && vals[i]!=="null"){
            node.right=new TreeNode(parseInt(vals[i]));
            q.push(node.right);
        }
        i++;
    }
    return root;
};