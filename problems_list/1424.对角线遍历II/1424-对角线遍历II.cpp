class Solution 
{
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& nums) 
    {
        vector<vector<int>> rec;                        //8皇后问题里用的  左斜rc_sum  右斜rc_diff
        for (int i = 0; i < nums.size(); i++)           //从上至下
        {
            for (int j=0; j < nums[i].size(); j++)      //从左至右
            {
                if (i + j < rec.size())
                    rec[i + j].push_back(nums[i][j]);   //rc_sum作为rec中的index
                else
                {
                    vector<int> tmp = {nums[i][j]};
                    rec.push_back(tmp);
                }
            }
        }
        vector<int> res;
        for (auto v: rec)
        {
            reverse(v.begin(), v.end());            //r越小  越在后面才对  翻转一下
            res.insert(res.end(), v.begin(), v.end());
        }
        return res;
    }
};