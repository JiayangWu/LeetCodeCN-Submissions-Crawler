class Solution:
    def longestZigZag(self, root: TreeNode) -> int:
        def dfs(root: TreeNode, p_left: bool, l: int):
            nonlocal ans
            if not root:
                return
            ans=max(ans,l)
            if p_left:
                dfs(root.left,True,1)
                dfs(root.right,False,l+1)
            else:
                dfs(root.left,True,l+1)
                dfs(root.right,False,1)
            
        ans=0
        dfs(root,True,0)
        return ans