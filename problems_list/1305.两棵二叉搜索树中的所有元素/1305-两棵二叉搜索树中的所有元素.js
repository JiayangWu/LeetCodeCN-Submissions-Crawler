var getAllElements = function(root1, root2) {
    const nums1 = [];
    const nums2 = [];

    const inorder = (node, res) => {
    if (node) {
            inorder(node.left, res);
            res.push(node.val);
            inorder(node.right, res);
        }
    };

    inorder(root1, nums1);
    inorder(root2, nums2);

    const merged = [];
    let p1 = 0, p2 = 0;
    while (true) {
        if (p1 === nums1.length) {
            for (let i = p2; i < nums2.length; i++) {
                merged.push(nums2[i]);
            }
            break;
        }
        if (p2 === nums2.length) {
            for (let i = p1; i < nums1.length;i++) {
                merged.push(nums1[i]);
            }
            break;
        }
        if (nums1[p1] < nums2[p2]) {
            merged.push(nums1[p1++]);
        } else {
            merged.push(nums2[p2++]);
        }
    }
    return merged;
};