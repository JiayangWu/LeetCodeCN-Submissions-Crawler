/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int M, N;
    vector<vector<int>> dirs={{0,1},{1,0},{0,-1},{-1,0}};
    void dfs(int x, int y, int d, ListNode* h, vector<vector<int>> &vis, vector<vector<int>> &nums){
        if(h==nullptr || vis[x][y]) return;
        
        nums[x][y]=h->val;
        vis[x][y]=1;
        
        int nx=x+dirs[d][0], ny=y+dirs[d][1];
        if(nx>=0 && nx<M && ny>=0 && ny<N && !vis[nx][ny]){
            dfs(nx, ny, d, h->next, vis, nums);
        }else{
            d=(d+1)%4;
            nx=x+dirs[d][0], ny=y+dirs[d][1];
            dfs(nx, ny, d, h->next, vis, nums);
        }
    }
    
    vector<vector<int>> spiralMatrix(int m, int n, ListNode* head) {
        M=m, N=n;
        vector<vector<int>> nums(m, vector<int>(n, -1)), vis(m, vector<int>(n, 0));
        dfs(0, 0, 0, head, vis, nums);
        return nums;
    }
};