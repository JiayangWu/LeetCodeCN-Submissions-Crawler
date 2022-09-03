class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        vector<int> res;                //我们用数组模拟栈

        for (int &item : asteroids)     //遍历小行星
        {
            //栈不为空，栈顶小行星向右飞行，当前小行星向左飞行且栈顶小行星较小的情况，栈顶小行星爆炸
            while (!res.empty() && res.back() > 0 && res.back() < -item)
            {
                res.pop_back();
            }
            
            //栈不为空，当前小行星向左飞行，且俩行星大小相同的情况，同时爆炸
            if (!res.empty() && item < 0 && res.back() == -item)
            {
                res.pop_back();
            }

            //1、若当前小行星向右飞行，不用管栈顶小行星的飞行方向，它肯定不会与栈顶小行星相撞；
            //2、栈为空时，当前小行星入栈；
            //3、若栈顶小行星向左飞行，不用管当前小行星的飞行方向，它肯定不会与栈顶小行星相撞；
            else if (item > 0 || res.empty() || res.back() < 0)
            {
                res.push_back(item);
            }
        }
        
        return res;
    }
};